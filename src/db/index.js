import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";



const connectDB = async ()=> {
    try {
        const connectionInstace =  await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`\n MongoDB connected !! DB HOst: ${connectionInstace.connection.host}`);
        //THis is for knowing which DB you are connecting to. Prod, Dev, Test
        
    } catch (error) {
        console.log("Mongo DB Connection Error", error);
        process.exit(1);
    }
}

export default connectDB;