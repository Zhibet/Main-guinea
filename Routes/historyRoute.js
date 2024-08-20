const express = require('express')
const historyRoute = express.Router()

historyRoute.get('/history',(req,res)=>{
    res.render('historyPage')
})

module.exports = historyRoute