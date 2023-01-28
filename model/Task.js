const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,"Enter a value"],
        trim: true,
        maxlength:[20,"Enter a value of less than 20"]
    },
    completed:{
        type: Boolean,
        default:false
    }
})

  
module.exports = mongoose.model('Task',TaskSchema)