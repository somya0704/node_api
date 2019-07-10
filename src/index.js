let express = require('express')
let app = express()
var mongoose = require('mongoose')

const server = 'ds341837.mlab.com:41837'
const database = 'learning'
const user = 'nitinkumar24'
const password = 'omg123omg123'


mongoose.connect("mongodb://test:test123@ds341837.mlab.com:41837/learning");



let path = require('path')

let contactRoute = require("../src/routes/contact")

let bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use(contactRoute)
//app.use((req, res, next) => {
  //  console.log(`${ new Date().toString() } => ${req.originalUrl}`, req.body)

    //next()
//})
 
app.use('/', (req,res)=>{
    res.json({
        status: 'ok',
        message: 'Welcome from express',
    });
});


// 404 handler middleware
app.use((req, res, next) => {
    res.status(404).send('Page not found')
})

//500 handler
//app.use((err, req, res, next) => {
  //  console.error(err.stack)

    //res.sendFile(path.join(__dirname, '../public/500.html'))
//})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.info(`Service has started on ${PORT}`))