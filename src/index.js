let express = require('express')
let app = express()


let personRoute = require('./routes/person')
 
app.use(express.static('public'))

app.use(personRoute)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.info(`Service has started on ${PORT}`))