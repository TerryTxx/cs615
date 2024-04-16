const mongoose =require('mongoose');
// Define the schema for the Story collection
const Schema = mongoose.Schema;
const StorySchema = new Schema({
    title:{
        type:String,
        maxlength:30
    },
    createdBy:{
        type:String,
    },
    storyId:{
        type:Number,
        required:true
    },
    createdDate:{
        type:Date,
        default:Date.now
    }
})
<<<<<<< Updated upstream
// Export the mongoose model for the Story collection
=======

>>>>>>> Stashed changes
module.exports = mongoose.model('story',StorySchema);
