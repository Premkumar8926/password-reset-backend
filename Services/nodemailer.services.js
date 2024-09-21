import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env

// Create a transporter object using the SMTP transport
const transporter = nodemailer.createTransport({
    service: 'gmail', // You can use other services like 'Outlook', 'Yahoo', etc.
    auth: {
        user: process.env.EMAIL, // Your email address
        pass: process.env.PASSWORD, // Your email password
    },
});

// Function to send an email
const sendEmail = async (to, subject, text, html) => {
    const mailOptions = {
        from: process.env.EMAIL, // Sender address
        to, // List of recipients
        subject, // Subject line
        text, // Plain text body
        html, // HTML body
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
    } catch (error) {
        console.error('Error sending email:', error);
        throw error; // Rethrow error for further handling if needed
    }
};

export default sendEmail;
