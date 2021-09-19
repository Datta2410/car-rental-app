const express = require('express')
require('dotenv').config({ path: 'config/.env' })
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3001

const bodyParser = require('body-parser') 
app.use(bodyParser.json())
const urlencodedParser = bodyParser.urlencoded({extended:false}) 

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(response => console.log("Database Connected"))
.catch(error => console.log(error))

app.use(cors())
const carRoutes = require('./src/routes/car')
app.use('/cars', carRoutes)
app.get('/', (req, res) => {
    res.json({message:"ok"})
})

app.listen(port,()=>{
    console.log('this is local host '+ port)
})
