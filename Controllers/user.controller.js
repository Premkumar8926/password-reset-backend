import Users from '../Models/user.schema.js';
import bcrypt from 'bcryptjs';
import randomString from 'randomstring';
import mail from '../Services/nodemailer.services.js';

// User registration
export const register = async (req, res) => {
    const { email, password } = req.body;

    try {
        const userExists = await Users.findOne({ email });

        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new Users({ email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// User login
export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await Users.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Forgot password
export const forgotPassword = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await Users.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const verificationString = randomString.generate(20);
        user.verificationString = verificationString;
        user.expiryTime = Date.now() + 600000;  // 10 minutes
        await user.save();

        mail(email, verificationString);
        res.status(200).json({ message: 'Password reset link sent' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Verify reset link
export const verifyString = async (req, res) => {
    const { verificationString } = req.body;

    try {
        const user = await Users.findOne({ verificationString });

        if (!user || user.expiryTime < Date.now()) {
            return res.status(400).json({ message: 'Invalid or expired reset link' });
        }

        res.status(200).json({ message: 'Valid reset link' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Change password
export const changePassword = async (req, res) => {
    const { verificationString, newPassword } = req.body;

    try {
        const user = await Users.findOne({ verificationString });

        if (!user || user.expiryTime < Date.now()) {
            return res.status(400).json({ message: 'Invalid or expired reset link' });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        user.verificationString = null;
        user.expiryTime = null;
        await user.save();

        res.status(200).json({ message: 'Password changed successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }
};
