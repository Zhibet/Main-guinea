const express = require('express')
const vacationRoute = express.Router()

vacationRoute.get('/vacation',(req,res)=>{
    res.render('vacationPage')
})

module.exports = vacationRoute