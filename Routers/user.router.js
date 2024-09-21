import express from 'express';
import { 
    register, 
    login, 
    forgotPassword, 
    verifyString, 
    changePassword 
} from '../Controllers/user.controller.js';

const router = express.Router();

// Route to register a new user
router.post('/register', register);

// Route for user login
router.post('/login', login);

// Route to request a password reset link
router.post('/forgotpassword', forgotPassword);

// Route to verify the reset link
router.post('/verifystring', verifyString);

// Route to change the password
router.post('/changepassword', changePassword);

// Test route to check if the backend is running
router.get("/test", (req, res) => {
    res.send("Backend server is running!");
});

// Export the router
export default router;
