// Importing the required modules
const mongoose = require('mongoose');

// Creating a new schema
const Schema = mongoose.Schema;

// Defining the User schema
const UserSchema = new Schema({
    username: {
        type: String,
        unique: [true, "Please use a different username"], // Ensuring the username is unique
    },
    name: String, // User's first name
    lastName: String, // User's last name
    public: {
        type: Boolean, // Public profile status
    },
    profilePhoto: {
        type: String,
        default: 'default.jpg' // Default profile photo
    },
    createdDate: {
        type: Date,
        default: Date.now // Setting the default date to the current date
    }
});

// Exporting the User model
module.exports = mongoose.model('User', UserSchema);
