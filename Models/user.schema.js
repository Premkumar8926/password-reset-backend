import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    verificationString: {
        type: String,
        default: null
    },
    expiryTime: {
        type: Number,
        default: null
    }
});

const Users = mongoose.model('Users', userSchema);
export default Users;
