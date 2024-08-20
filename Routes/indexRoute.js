const express = require('express')
const HomeRoute = express.Router()

HomeRoute.get('/',(req,res)=>{
    res.render('homePage')
})

module.exports = HomeRoute