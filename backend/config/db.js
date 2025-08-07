import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async() => {
    try {
        const dbconnectionInstance = await mongoose.connect(`${process.env.MONGO_DB_URI}`);
        console.log(`\n Mongodb connected, DB host: ${dbconnectionInstance.connection.host}`)
    } catch (error) {
        console.log("Mongodb connection error: ", error)
        process.exit(1)
    }
}

export default connectDB;