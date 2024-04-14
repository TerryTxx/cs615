const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
module.exports=()=>{
	// mongoose.set('useCreateIndex', true);
    mongoose.connect('mongodb+srv://xiaoxutan2023:T12345@cluster0.lzjdg3n.mongodb.net/')
    mongoose.connection.on('open',()=>{
        console.log('Connection OK');
    })
    mongoose.connection.on('error',(err)=>{
        console.log('Connection Fail',err);
    })
}
