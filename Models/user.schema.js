import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Please enter a valid email address.'], // Email format validation
        },
        password: {
            type: String,
            required: true,
            minlength: 8, // Minimum password length
        },
        verificationString: {
            type: String,
            default: null,
        },
        expiryTime: {
            type: Number,
            default: null,
        }
    },
    {
        timestamps: true, // Automatically manage createdAt and updatedAt fields
    }
);

const Users = mongoose.model('User', userSchema); // Using 'User' instead of 'Users' for clarity
export default Users;
