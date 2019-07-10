let contactModel = require("../models/contactModel")
let contactController = require("../controllers/contactController")
let express = require('express')
let router = express.Router()

router.get('/contacts', contactController.getContacts);

router.post('/contacts', contactController.newContacts );



module.exports = router