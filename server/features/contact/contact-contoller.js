const Contact = require("./contact-model");
const {
  addContact,
  getContacts,
  deleteContact,
  updateContact,
} = require("./contact-services");

//get
const getfn = async (req, res) => {
  try {
    const contact = await getContacts({});
    return res.json(contact);
  } catch (e) {
    return res.json({ msg: "Contacts Not found" });
  }
};

//add
const addfn = async (req, res) => {
  const newContact = new Contact({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    phone: req.body.phone,
  });
  try {
    await addContact(newContact);
    res.json({ msg: "added" });
    return;
  } catch (e) {
    return res.json({ msg: "failed" });
  }
};

// delete

const deletefn = async (req, res) => {
  try {
    await deleteContact({ _id: req.params.id });
    res.json({ msg: "deleted" });
  } catch (e) {
    return res.json({ msg: "failed" });
  }
};

//upate
const updatefn = async (req, res) => {
  try {
    await updateContact({ _id: req.params.id });
    res.json({ msg: "updated" });
  } catch (e) {
    return res.json({ msg: "failed" });
  }
};
module.exports = {
  getfn,
  addfn,
  deletefn,
  updatefn,
};
