const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Story schema with validation and default values
const StorySchema = new Schema({
    title: {
        type: String,
        maxlength: [30, 'Title cannot exceed 30 characters'], // Added validation message for maxlength
        required: [true, 'Title is required'], // Made title a required field
        trim: true // Added trim option to remove whitespace
    },
    createdBy: {
        type: Schema.Types.ObjectId, // Changed type to ObjectId for referencing User model
        required: [true, 'Creator ID is required'], // Made createdBy a required field
        ref: 'User' // Added reference to the User model
    },
    storyId: {
        type: Number,
        required: [true, 'Story ID is required'],
        unique: true // Ensured storyId is unique
    },
    createdDate: {
        type: Date,
        default: Date.now // Automatically set to the current date
    }
});

// Export the Story model
module.exports = mongoose.model('Story', StorySchema);
