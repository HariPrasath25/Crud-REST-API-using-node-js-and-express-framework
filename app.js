const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/project'
const app = express()
mongoose.connect(url,{useNewUrlParser:true})
const con=mongoose.connection
con.on('open',()=>{
    console.log('connected....');
})
//use express in json format
app.use(express.json())
const hariRouter = require('./routes/haris')
app.use('/hari',hariRouter)
app.listen(9000,()=>{
    console.log('server connected');
})