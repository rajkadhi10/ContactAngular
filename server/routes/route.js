const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");
const controller = require("../contoller/contoller");

//read
router.get("/getContacts", controller.getfn);

//add contact
router.post("/addContact", controller.addfn);

//delete
router.delete("/deleteContact/:id", controller.deletefn);

//update
router.put("/updateContact/:id", controller.updatefn );

module.exports = router;
