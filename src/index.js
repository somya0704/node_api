let express = require('express')
let app = express()


let personRoute = require('./routes/person')

app.use((req, res, next) => {
    console.log(`${ new Date().toString() } => ${req.originalUrl}`)

    next()
})
 
app.use(express.static('public'))

app.use(personRoute)


// 404 handler middleware
app.use((req, res, next) => {
    res.status(404).send('Page not found')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.info(`Service has started on ${PORT}`))