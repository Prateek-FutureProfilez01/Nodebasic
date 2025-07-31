const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
       
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    user_name:{
        type:String,
        require:true,
    }
})
module.exports = mongoose.model("user",userSchema)
