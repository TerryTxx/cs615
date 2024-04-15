const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

// Define the ScrumUser schema
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
        required: [true, "Password is required"],
        // Hash password before saving
        set: password => bcrypt.hashSync(password, bcrypt.genSaltSync(10))
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

// Export the ScrumUser model
module.exports = mongoose.model('ScrumUser', ScrumUserSchema);
