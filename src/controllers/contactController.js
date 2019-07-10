let Contact = require('../models/contactModel');

//index
exports.index = (req,res) => {
    Contact.get((err,contacts) => {
        if(err){
            res.json({
                status: "error",
                message: err
            });
        }

        res.json({
            status: "success",
            message: "contact retrieved",
            data: contacts
        });
    });
}         