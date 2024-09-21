import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();  // Load environment variables from .env

const connectDB = async () => {
    try {
        // Connect to MongoDB using the connection string from the .env file
        const connection = await mongoose.connect(process.env.mongoDbConnectionString);
        console.log("MongoDB connected");
    } catch (error) {
        console.error("Database connection error:", error);
        process.exit(1);  // Exit the app if the connection fails
    }
};

export default connectDB;
