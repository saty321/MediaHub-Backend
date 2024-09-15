import dotenv from "dotenv"
import connectDB from './db/index.js';

dotenv.config({
    path: './env'
})
connectDB();

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";

// ;(
//     async () => {
//         try {
//          const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//          console.log(`mongodb connected !! on PORT ${connectionInstance.connection.port}`)
//         } catch (error) {
//             console.error("ERROR: ", error);
//             throw error
//         }
//     }
// )()