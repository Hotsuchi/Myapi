require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const myObj=[
    {
        name:'tk',
        age:34
    },
    ]

app.get('/',(req,res)=>{
    res.send(myObj);
})

app.listen(port);