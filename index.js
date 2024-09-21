import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './Database/DbConfig.js';
import userRoutes from './Routers/user.router.js';

dotenv.config();
const app = express();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies

// Connect to the database
connectDB();

// API routes
app.use('/api/user', userRoutes);

// Set the port from the environment variables or use 5000 as default
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
