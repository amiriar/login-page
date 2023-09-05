import mongoose from "mongoose";

async function connectedDB() {
    try{
        if(mongoose.connections[0].readyState) return;
    
        await mongoose.connect(process.env.MONGO_URI);
        console.log("databse connected");
    }
    catch(err){
        console.log(1,err);
    }
}

export default connectedDB;