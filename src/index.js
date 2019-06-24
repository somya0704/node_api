let express = require('express')
let app = express()


let personRoute = require('./routes/person')

let customerRoute = require('./routes/customer')

let path = require('path')

let bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use((req, res, next) => {
    console.log(`${ new Date().toString() } => ${req.originalUrl}`, req.body)

    next()
})
 
app.use(express.static('public'))

app.use(personRoute)
app.use(customerRoute)

// 404 handler middleware
app.use((req, res, next) => {
    res.status(404).send('Page not found')
})

//500 handler
app.use((err, req, res, next) => {
    console.error(err.stack)

    res.sendFile(path.join(__dirname, '../public/500.html'))
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.info(`Service has started on ${PORT}`))