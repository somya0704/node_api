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