const mongoose =require('mongoose');
const Schema = mongoose.Schema;
// Define the schema for the Task collection
const TaskSchema = new Schema({
    title:{
        type:String,
        default:'No Title'
    },
    content:{
        type:String,
        default:'No Content'
    },
    date:{
        type:Date,
        default:Date.now
    },
    contributors:{
        type:Schema.Types.ObjectId, //dont forget that!
        required:true
    },
    status:{
        type:Number,
        required:true
    },
    createdBy:{
        type:String,
        required:true
    },
	dueDate:{
		type:Date,
        default:Date.now
    },
    color:{
        type:String,
        default:"#2196f3"
    },
    storyId:{
        type:Number,
        required:true
    }
})
// Export the mongoose model for the Task collection
module.exports = mongoose.model('task',TaskSchema);
