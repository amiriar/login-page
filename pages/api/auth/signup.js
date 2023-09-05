import connectedDB from "../../../utils/connectDB";
import User from '../../../models/User'
import { hashPassword } from "../../../utils/auth";

async function handler(req,res){
    if(req.method !== "POST") return; 

    try{
        await connectedDB()
    }
    catch(err){
        console.log(err);
        return res
        .status(500).json({status: "failed", message: "error in connectng to databse"})
    }

    const {email , password} = req.body;
    if(!email || !password) return res.status(422).json({status:"failed", message:"invalid data"});

    const existingUser = await User.findOne({email:email});

    if(existingUser) return res.status(422).json({status:"failed", message:"you have already signed up"});

    const hashedPassword = await hashPassword(password);

    const newUser = await User.create({email:email, password: hashedPassword})

    res.status(201).json({status: "success", message:"User Crerated"})
}

export default handler;