const express = require('express')
const spotRoute = express.Router()

spotRoute.get('/newSpot',(req,res)=>{
    res.render('spotPage')
})

module.exports = spotRoute