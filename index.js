const express = require('express')
require('dotenv').config() /* to access constants dot env variables */

const cors = require('cors')
const PORT = process.env.SERVER_PORT

// instance to express
const app = express()

// body parser middleware -> to read data from frontend

// urlencoded format -> form data
app.use(express.urlencoded({ extended: true }))

// json format (javascript object notation)
app.use(express.json())

// middleware -> cross origin resource sharing (Http headers)
app.use(cors())

// index route(path,controller)
app.get(`/`, function(req,res){
    res.status(200).json({ status: true, msg: `Welcome to mern email api`})
})

// api routes
app.use(`/api/mail`, require('./route/appRoute'))

// default route
app.all(`/*`, (req,res) => {
    res.status(404).json({ status: true, msg: `Requested path not found`})
})

// start the server
app.listen(PORT, function(){
    console.log(`server is running @ http://localhost:${PORT}`)
})