const express = require('express')
const ejs = require('ejs')
const engine = require('ejs-mate')
const indexRoute = require('./Routes/indexRoute')
const vacationRoute = require('./Routes/vacationRoute')
const historyRoute = require('./Routes/historyRoute')
const triviaRoute = require('./Routes/triviaRoute')
const spotRoute = require('./Routes/spotsRoute')

const app = express()
app.engine('ejs', engine);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static('public'))

app.use('/',indexRoute)
app.use('/',vacationRoute)
app.use('/',historyRoute)
app.use('/',triviaRoute)
app.use('/',spotRoute)


const port = 3000
app.listen(port,()=>{
    console.log('the app is live on port 3000')
})