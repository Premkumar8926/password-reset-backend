import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env
dotenv.config();

const connectDB = async () => {
    try {
        // Connect to MongoDB using the connection string from the .env file
        const connection = await mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected:", connection.connection.host);
    } catch (error) {
        console.error("Database connection error:", error.message);
        process.exit(1); // Exit the app if the connection fails
    }
};

export default connectDB;
