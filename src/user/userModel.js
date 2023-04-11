let mongoose = require('mongoose')
let Schema = mongoose.Schema;

let userSchema = new Schema({
    category:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    quantity:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
})

module.exports = mongoose.model('employees', userSchema)