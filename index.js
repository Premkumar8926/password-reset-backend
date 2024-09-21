import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './Database/DbConfig.js';
import userRoutes from './Routers/user.router.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

connectDB();  // Connect to the database

app.use('/api/user', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
