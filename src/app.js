const express = require('express')
require('dotenv').config() 
const app = express()
const port = process.env.PORT || 3001
const bodyParser = require('body-parser') 
app.use(bodyParser.json())
const urlencodedParser = bodyParser.urlencoded({extended:false}) 
const mongoose = require('mongoose')
require('./db/mongoose.js')
app.get('/', (req, res) => {
    res.json({message:"ok"})
})

app.listen(port,()=>{
    console.log('this is local host '+ port)
})
