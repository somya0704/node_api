let contactModel = require("../models/contactModel")
let contactController = require("../controllers/contactController")
let express = require('express')
let router = express.Router()


router.route('/contacts')
      .get(contactController.index)


module.exports = router