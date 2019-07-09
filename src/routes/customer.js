let CustomerModel = require('../models/customer.model')
let express = require('express')
let router = express.Router()

//Create a new customer

router.post('/customer', async (req,res) => {
   
  try {
    if(!req.body){
        return res.status(400).send('request body is missing')
    }
    const customer = new CustomerModel(req.body)
    const savedCustomer = await customer.save();
    res.status(201).send(savedCustomer)  
  } catch (error) {
    res.status(400).json({"message": "error"})   
  }
})

module.exports = router