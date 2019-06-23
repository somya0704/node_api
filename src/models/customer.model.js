const mongoose = require('mongoose')

const server = 'ds341837.mlab.com:41837'
const database = 'learning'
const user = 'nitinkumar24'
const password = 'omg123omg123'



mongoose.connect(`mongodb://nitinkumar24:omg123omg123@ds341837.mlab.com:41837/learning`)

let CustomerSchema =  new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true,

    }
})


module.exports = mongoose.model('Customer', CustomerSchema)
