const mongoose = require('mongoose');
// Set Mongoose to use global promises
mongoose.Promise = global.Promise;
// Export function to establish MongoDB connection
module.exports=()=>{
	// mongoose.set('useCreateIndex', true);
    // Connect to MongoDB Atlas cluster
    mongoose.connect('mongodb+srv://xiaoxutan2023:T12345@cluster0.lzjdg3n.mongodb.net/')
    // Event handler for successful connection
    mongoose.connection.on('open',()=>{
        console.log('Connection OK');
    })
    // Event handler for connection errors
    mongoose.connection.on('error',(err)=>{
        console.log('Connection Fail',err);
    })
}
