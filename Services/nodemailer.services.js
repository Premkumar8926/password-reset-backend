import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const mail = (receiverEmail, verificationString) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,  // Your Gmail address
            pass: process.env.PASSWORD // Your Gmail password or app password
        }
    });

    const resetLink = `https://prem-user-management.netlify.app/resetpage/${verificationString}`;
    
    const mailOptions = {
        from: process.env.EMAIL,
        to: receiverEmail,
        subject: 'Password Reset',
        html: `<p>Click <a href="${resetLink}">here</a> to reset your password. The link is valid for 10 minutes.</p>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("Email send error: ", error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });
};

export default mail;
