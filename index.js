require('dotenv').config();
const express = require('express');
const myfil = require(./index.html);
const app = express();
const port = process.env.PORT || 3000;

const myObj={
        'name':'tk',
        'age':'34'
    }

app.get('/',(req,res)=>{
    res.send(myfil);
})
app.get('/api',(req,res)=>{
    res.json(myObj);
})

app.listen(port);