let contactModel = require("../models/contactModel")
let contactController = require("../controllers/contactController")
let express = require('express')
let router = express.Router()

router.get('/contacts', contactController.getContacts);

router.post('/contacts', contactController.newContacts );

router.get('/contacts/:contact_name', contactController.viewContacts)

router.patch('/contacts/:contact_name', contactController.updateContacts)

router.put('/contacts/:contact_name', contactController.updateContacts)

router.delete('/contacts/:contact_name', contactController.delContacts)

module.exports = router



//.get(contactController.view)
//.patch(contactController.update)
//.put(contactController.update)
//.delete(contactController.delete);