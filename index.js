require('dotenv').config();
const path = require('path');
const data = require('./data.json');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.get('/',(req,res)=>{
    res.send(path.join(__dirname,index.html));
})
app.get('/dta',(req,res)=>{
    res.json(data);
})

app.listen(port);