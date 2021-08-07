const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/studentsapi", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() =>{
    console.log("connection is successfull !!");
}).catch((e) =>{
    console.log("No connection");
})