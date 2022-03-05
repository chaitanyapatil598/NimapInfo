const mongoose = require("mongoose")

const connectDataBase = ()=>{
    mongoose.connect(process.env.DB_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then((data)=>{
        console.log(`server is connected with mongoDB ${data.connection.host}`);
        }).catch((err)=>{
        console.log(err)
        })
}

module.exports = connectDataBase