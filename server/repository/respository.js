const Contact = require("../models/contact");

//get
const getRepo = (req, res, next) => {
    Contact.find((err, contacts) => {
      res.json(contacts);
    });
  };



//add
const addRepo = (req, res, next) => {
    const newContact = new Contact({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      phone: req.body.phone,
    });
    newContact.save((err, contact) => {
      if (err) {
        res.json({ msg: "Failed" });
      }
      res.json({ msg: "Contact added successfully" });
      
    });
  };




//delete
const deleteRepo = (req, res, next) => {
    Contact.remove({ _id: req.params.id }, (err, result) => {
      if (err) {
        res.json(err);
      }
      res.json(result);
    });
  };




//update
const updateRepo = (req,res,next)=>{
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