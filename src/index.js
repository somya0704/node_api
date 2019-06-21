let express = require('express')
let app = express()
 
app.use(express.static('public'))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.info(`Service has started on ${PORT}`))