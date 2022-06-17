//importing modules

const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cors = require('cors')
const path = require('path')

const app = express()

const route = require('./routes/route')

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/contactlist')

//on connection
mongoose.connection.on('Connected',()=>{
    console.log('Connected to database momgodb @ 27017');
})

mongoose.connection.on('error',(err)=>{
    if(err){
        console.log('Error in database connection',err);
    }
})

//port number
const port = 3000

//adding ,middleware - cors

app.use(cors())

//bodyparser
app.use(bodyparser.json())

//static files
app.use(express.static(path.join(__dirname, 'public')))


//route
app.use('/api', route)


//testng server
app.get('/',(req,res)=>{
    res.send('foobar')
})

app.listen(port,()=>{
    console.log('Server is running on port:'+port);
})