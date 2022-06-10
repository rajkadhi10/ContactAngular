const Contact = require("../models/contact");
const express = require("express");
const router = express.Router();


//get
const getfn = (req, res, next) => {
  Contact.find((err, contacts) => {
    res.json(contacts);
  });
};

//add
const addfn = async (req, res, next) => {
  const newContact = new Contact({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    phone: req.body.phone,
  });
  // newContact.save((err, contact) => {
  //   if (err) {
  //     res.json({ msg: "Failed" });
  //   }
  //   res.json({ msg: "Contact added successfully" });
    
  // });
//   newContact.save().then((data)=>{
//     console.log(data);
//   }).catch((err)=>{
// console.log(err);
//   })

const variable = await newContact.save() 
console.log(variable);

  
};

//delete
const deletefn = (req, res, next) => {
  Contact.remove({ _id: req.params.id }, (err, result) => {
    if (err) {
      res.json(err);
    }
    res.json(result);
  });
};

//upate
const updatefn = (req,res,next)=>{
Contact.findByIdAndUpdate({_id: req.params.id} , {  
  first_name: req.body.first_name,
  last_name: req.body.last_name,
  phone: req.body.phone},

function (err,contact) {
if (err){
res.json(err)
}
else{
res.json({mgs: "Contact updated sucessfully"});
}
});
}
module.exports = {
  getfn, 
  addfn,
  deletefn,
  updatefn
};
