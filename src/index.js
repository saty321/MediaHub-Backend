import dotenv from "dotenv"
import connectDB from './db/index.js';
import {app} from "./app.js"
dotenv.config({
    path: './env'
})
const PORT = process.env.PORT || 8000;
connectDB()
.then(()=>{
app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})
})
.catch((err) => {
    console.log("mongoDB connection is FAILED !!! ",err);
    process.exit(1);
})















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