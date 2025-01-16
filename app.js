require('dotenv').config();
const mongoose = require("mongoose");
const cors = require("cors");
const express = require('express')
const phoneRoutes = require('./routes/phoneRoute');
const app = express()

// midlewares application
// cors to allow only whitelisted urls to pass through
const connectMongoDB = ({
    dbName,
    dbConnectionString,
    dbDescription
})=>{
    try {
        const db = mongoose.createConnection(dbConnectionString);
        db.once('open', () => {
          console.log(` Connected to DB: ${dbName}`);
          console.log(` DB Description : ${dbDescription}`)
        })
      
      }
      catch (e) {
        console.log("DB Connection error " + e);
      }
      
} 

app.use(cors({
    origin:[
        process.env.ORIGIN
    ]
}));
connectMongoDB({
    dbName:"Mobile DB",
    dbConnectionString: process.env.MONGODB_URL_DB,
    dbDescription:`This DB stores mobile and other device data`,
})

app.use("/api/v1",phoneRoutes);
app.listen(process.env.port, () => {
    console.log(` server running on ${process.env.port}`)

})
