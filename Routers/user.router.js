import express from 'express';
import { register, login, forgotPassword, verifyString, changePassword } from '../Controllers/user.controller.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/forgotpassword', forgotPassword);
router.post('/verifystring', verifyString);
router.post('/changepassword', changePassword);

router.get("/test", (req, res) => {
    res.send("Backend server is running!");
});


export default router;
