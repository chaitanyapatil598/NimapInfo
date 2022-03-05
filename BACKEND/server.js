const app = require("./app")

const dotenv =  require("dotenv")

const connectDataBase = require('./configration/database')

dotenv.config({path:"BACKEND/configration/config.env"})


connectDataBase()

app.listen(process.env.PORT,()=>{
    console.log(`server is listen isn http://localhost${process.env.PORT}`)
})