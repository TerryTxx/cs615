const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;
// Define the schema for the ScrumUser collection
const ScrumUserSchema = new Schema({
    fullName: {
        type: String,
        required: [true, "Full name is required"]
    },
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: [true, "This username is already taken"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "This email is already registered"],
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Please fill a valid email address"]
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});
// Export the mongoose model for the ScrumUser collection
module.exports = mongoose.model('ScrumUser', ScrumUserSchema);
