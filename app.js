const express = require("express");
const bodyParse = require("body-parser")

const app = express();

const admin = require('./Routes/admin')
const shop = require('./Routes/shop')

app.use(bodyParse.urlencoded({extended:false}))

app.use("/admin",admin)

app.use("/shop",shop);
// comment


app.use("/",(req,res) =>{
    res.send("<h1> Main page</h1>")  
  })


app.listen(3003);
