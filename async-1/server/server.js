require('dotenv').config

const express = require('express')
const dotenv = require('dotenv')
const massive = require('massive')
const bodyParser = require('body-parser')


app.use(express.static(__dirname+'../build'))
app.use(bodyParser.json())


app.listen(process.env.SERVER_PORT, ()=>{
    console.log(`Listening on port ${process.env.SERVER_PORT}`)
});
