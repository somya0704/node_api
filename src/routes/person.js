let express = require('express')

let router = express.Router()
router.get('/person', (req,res) => {
if(req.query.name){
    res.send(`You have requested a person ${req.query.name}`)
}
else{
    res.send('You have requested a person')
}


})
//Param property on the request obj
//router.get('/person/:name', (req,res) => {
  //  res.send(`You have requested a person ${req.params.name}`)
//})


module.exports = router