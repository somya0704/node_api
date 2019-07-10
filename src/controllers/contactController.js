let Contact = require('../models/contactModel');

export const getContacts = async (req,res) => {
    
    try {const contacts = await Contact.find();
        return res.json({ status: "success", message: "contact retrieved", data: contacts });
    }catch (error) {
        res.status(400).json({ error: "something went wrong"})
        throw error;
    }

}   

export const newContact = async (req,res) => {
       
    try{const contact = new Contact(req.body);
        const newContact = await contact.save();
        return res.json({status: 'OK', message: 'New contact created!', data: newContact});
    }catch (error) {
        res.status(400).json({ error: error})
        throw error;
    }

}

export const viewContact = async(req,res) => {
    try{
       // console.log(req.params.name );
       const contacts = await Contact.find({ name: req.params.name });
       return res.json({status: "ok", message: "contact loading", data: contacts });
    }catch (error) {
        res.status(500).json({ error: "something went wrong"})
        throw error;
    }
}

export const updateContact = async(req,res) => {
    try{console.log(req.params.name)
        //console.log(req.body)
        let contacts = await Contact.findOneAndUpdate({name: req.params.name}, req.body)
        if (!contacts) {
            return res.status(404).send("not found");
          } else {
              //console.log(req.body)
            // contacts = await Contact.findOneAndUpdate(req.body)
            res.status(200).send(contacts);
          }   
    } catch (error) {
        res.status(400).json({ error: "something went wrong"})
        throw error;
    }
}




export let delContact = async (req,res) => {
    try {console.log(req.params.name)
        var contacts = await Contact.find({ name: req.params.name });
        // console.log(contacts)
    if (!contacts) {
      return res.status(404).send("not exists");
    } else {
        contacts = await Contact.findOneAndDelete({name: req.params.name});
        return res.status(200).send("successfully deleted");
    }
    } catch (error) {
        res.status(400).json({ error: "something went wrong"})
        throw error;
    }
}