const mongoose = require("mongoose");
try{

    mongoose.connect('mongodb://127.0.0.1:27017/projectone');
    console.log("Database Connected")
}
catch(e){
    console.log("something went wronge with the database")
}
