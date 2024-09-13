require('dotenv').config();
const express  = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) =>{
    res.send("<h1>hello</h1>");
})

app.listen(process.env.PORT,()=>{
    console.log(`app is running on PORT http://localhost:${process.env.PORT}`);
})