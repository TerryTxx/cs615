const mongoose =require('mongoose');
const Schema = mongoose.Schema;
// Define the schema for the User collection
const UserSchema = new Schema({
    username:{
        type:String,
        unique:[true,"Please different username"]
    },
    name:String,
    lastName:String,
    public:{
        type:Boolean,
    },
    profilePhoto:{
        type:String,
        default:'default.jpg'
    },
    createdDate:{
        type:Date,
        default:Date.now
    }
})
<<<<<<< Updated upstream
// Export the mongoose model for the User collection
=======
// Export the model for the User collection
>>>>>>> Stashed changes
module.exports = mongoose.model('user',UserSchema);