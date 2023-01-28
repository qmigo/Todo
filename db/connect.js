const mongoose = require('mongoose');

const connectDB = (uri)=>{
    mongoose.set('strictQuery', false);
    return mongoose.connect(uri).then(()=>console.log("connected to db"))
}

module.exports = connectDB