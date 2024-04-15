const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Task schema with default values and validation
const TaskSchema = new Schema({
    title: {
        type: String,
        default: 'No Title',
        trim: true // Added trim option to remove whitespace
    },
    content: {
        type: String,
        default: 'No Content',
        trim: true // Added trim option to remove whitespace
    },
    date: {
        type: Date,
        default: Date.now // Automatically set to the current date
    },
    contributors: {
        type: [Schema.Types.ObjectId], // Changed to an array to allow multiple contributors
        required: true,
        ref: 'User' // Added reference to the User model
    },
    status: {
        type: Number,
        required: true,
        enum: [0, 1, 2, 3] // Assuming these are the valid statuses, replace with actual values
    },
    createdBy: {
        type: Schema.Types.ObjectId, // Changed type to ObjectId for referencing User model
        required: true,
        ref: 'User' // Added reference to the User model
    },
    dueDate: {
        type: Date,
        default: Date.now // Automatically set to the current date
    },
    color: {
        type: String,
        default: "#2196f3",
        match: [/^#([0-9a-f]{3}){1,2}$/i, 'Please fill a valid hex color'] // Added validation for hex color
    },
    storyId: {
        type: Number,
        required: true,
        unique: true // Ensured storyId is unique
    }
});

// Export the Task model
module.exports = mongoose.model('Task', TaskSchema);
