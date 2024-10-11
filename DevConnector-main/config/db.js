const mongoose = require('mongoose');
const config = require('config');

const db = config.get('mongoURI');

const connectDB = async ()=>{
    try{
       await mongoose.connect(db);
       console.log("mongodb connected");
    }
    catch(err){
        console.log("error\n");
        console.error(err.message);
        //exit process with failure
        process.exit(1)
    }
}

module.exports = connectDB;