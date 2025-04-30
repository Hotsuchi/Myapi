require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.get('/',(req,res)=>{
    res.send(path.join(__dirname,index.html));
})
app.get('/api',(req,res)=>{
    res.json(path.join(__dirname,data.json));
})

app.listen(port);