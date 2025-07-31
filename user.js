const mongoose =  require("mongoose");

const UserSchema =  mongoose.Schema({
    first_name :{
        type : String,
        require :true
    } ,
     last_name :{
        type : String,
        require :true
    }
    ,
     phone_number :{
        type : Number,
        require :true
    },
     email :{
        type : String,
        require :true
    },
     password :{
        type : String,
        require :true
    },
     username :{
        type : String,
        require :true
    }
})



module.exports =  mongoose.model("profiles  ", UserSchema )