const {getContactsRepo, addContactRepo, deleteContactRepo, updateContactRepo} = require('./contact-respository')

const getContacts = async () => {
return await getContactsRepo()
};

const addContact = async (data) => {
    return await addContactRepo(data)
};
const deleteContact = async (id) => {
    return await deleteContactRepo(id)
};
const updateContact = async (id, update) => {
    return await updateContactRepo(id, update) 
};

module.exports = {
  getContacts,
  addContact,
  deleteContact,
  updateContact,
};
