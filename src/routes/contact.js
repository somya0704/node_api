let contactModel = require("../models/contactModel")
let contactController = require("../controllers/contactController")
let express = require('express')
let router = express.Router()

router.get('/contacts', contactController.getContacts);

router.post('/contacts', contactController.newContacts );

router.get('/contacts/:contact_name', contactController.viewContacts)

module.exports = router