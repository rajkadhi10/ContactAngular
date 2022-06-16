const {getContactsRepo, addContactRepo, deleteContactRepo, updateContactRepo} = require('./contact-respository')

const getContacts = async () => {
const contacts = await getContactsRepo()
return contacts
};

const addContact = async (data) => {
    return await addContactRepo(data)
};
const deleteContact = async (id) => {
    return await deleteContactRepo(id)
};
const updateContact = async (id) => {
    return await updateContactRepo(id) 
};

module.exports = {
  getContacts,
  addContact,
  deleteContact,
  updateContact,
};
