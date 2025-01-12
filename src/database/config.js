import mongoose from "mongoose";

const connectDB = async () => {
    try {
      await  mongoose.connect(process.env.MONGO_URL);  
        console.log("CONNECTED");
        
    } catch (error) {
        console.log(error);
        process.exit(1);
        
    }
}
export {connectDB};