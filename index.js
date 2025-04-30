require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

let myObj={
        'name':'tk',
        'age':'34'
    }

app.get('/',(req,res)=>{
    res.send(path.join(__dirname,index.html));
})
app.get('/api',(req,res)=>{
    res.json(myObj);
})

app.listen(port);