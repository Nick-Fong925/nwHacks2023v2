const mongoose = require("mongoose");

mongoose.set("strictQuery", false);


mongoose.connect("mongo://localhost:27017/Users")
.then(() => {
    console.log("mongodb connected");
})
.catch(()=> {
    console.log("failed to connect");
})

const LogInSchema = new mongoose.Schema({

    name: {
        type:String,
        require:true,
    },

    password: {
        type:String,
        require:true,
    }

})

const collection = new mongoose.model("UserData", LogInSchema)

module.exports=collection;


