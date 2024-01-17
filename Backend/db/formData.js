const mongoose = require("mongoose")

const formSchema = new mongoose.Schema({
    name : String,
    number : Number,
    email : String,
    subject : String,
    content : String,
})

module.exports=mongoose.model("form" , formSchema)