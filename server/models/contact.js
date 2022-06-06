//contact schema

const mongoose = require('mongoose')

const ContactsSchema = mongoose.Schema({
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    }
})

const Contact = module.exports = mongoose.model('Contact', ContactsSchema)