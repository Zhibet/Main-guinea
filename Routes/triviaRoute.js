const express = require('express')
const triviaRoute = express.Router()

triviaRoute.get('/trivia',(req,res)=>{
    res.render('triviaPage')
})

module.exports = triviaRoute