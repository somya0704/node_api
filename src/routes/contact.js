let contactModel = require("../models/contactModel")
let contactController = require("../controllers/contactController")
let express = require('express')
let router = express.Router()

router.get('/contacts', contactController.getContacts);

module.exports = router