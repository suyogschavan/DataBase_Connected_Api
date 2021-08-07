const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        minlength:3,
        required:true,
        unique:[true, "Email id already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email");
            }
        }
    },
    mobile:{
        type:Number,
        min:10,
        required:true,
        unique:true
    },
    address: {
        pincode:{
            type:Number,
            min:5,
            required:true
        },
        street:{
            type:String,
           required:true
        }
    }
    
})

// new connection 
const Student = new mongoose.model('Student', studentSchema);

module.exports = Student;
