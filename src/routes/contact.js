let contactModel = require("../models/contactModel")
let contactController = require("../controllers/contactController")
let express = require('express')
let router = express.Router()

router.get('/contacts', contactController.getContacts);

router.post('/contacts', contactController.newContact);

router.get('/contacts/:name', contactController.viewContact)

router.patch('/contacts/:name', contactController.updateContact)

router.put('/contacts/:name', contactController.updateContact)

router.delete('/contacts/:name', contactController.delContact)

module.exports = router

