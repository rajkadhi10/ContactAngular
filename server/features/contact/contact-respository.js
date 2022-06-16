const Contact = require("./contact-model");

const getContactsRepo = async()=>{
    return await Contact.find()   
}
const addContactRepo = async(data)=>{
    return await Contact.create(data)
}
const deleteContactRepo = async(id)=>{
    return await Contact.findByIdAndDelete(id)
}
const updateContactRepo = async(id, update)=>{
    return await Contact.findByIdAndUpdate(id, update)
}

module.exports={
    getContactsRepo,
    addContactRepo,
    deleteContactRepo,
    updateContactRepo
}