import { getSession } from "next-auth/react";
import connectedDB from "../../utils/connectDB";
import User from "../../models/User";
import { verifyPassword } from "../../utils/auth";

async function handler(req,res){
    if(req.method !== "POST") return;

    try{
        await connectedDB();
    }
    catch(err){
        console.log(err);
        return res
        .status(500).json({status: "failed", message: "error in connectng to databse"});
    }
    
    const {name,lastname,password} = req.body;

    const session = await getSession({req});
    console.log(session);
    if(!session) return res.status(401).json({status: "failed", message: "you are not logged in"});

    const user = await User.findOne({email:session.user.email});
    console.log(user);
    if(!user) throw new Error("user does not exist");

    const isValid = await verifyPassword(password, user.password);
    if(!isValid) return res.status(422).json({status: "failed", message: "username or password is incorrect"});

    user.name= name;
    user.lastname = lastname;
    user.save();

    res.status(201).json({status: "success", data: {name, lastname}})


}

export default handler;