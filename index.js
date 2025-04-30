require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

let myObj={
        'name':'tk',
        'age':'34'
    }

app.get('/',(req,res)=>{
    res.type('html').send("<h2>main page</h2>");
})
app.get('/api',(req,res)=>{
    res.json(myObj);
})

app.listen(port);