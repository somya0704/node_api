let Contact = require('../models/contactModel');

export const getContacts = async (req,res) => {
    try {
        const contacts = await Contact.find();
        return res.json({ status: "success", message: "contact retrieved", data: contacts });
    } catch (error) {
        res.status(400).json({ error: "something went wrong"})
        throw error;
    }
}   

export let newContacts = async(req,res) =>{
    try{
        let contact = new Contact();
        contact.name = req.body.name ? req.body.name : contact.name;
        contact.gender = req.body.gender;
        contact.email = req.body.email;
        contact.phone = req.body.phone;

        return res.json({status: 'OK', message: 'New contact created!', data: contact});

    }catch (error) {
        res.status(400).json({ error: "something went wrong"})
        throw error;
    }
}
