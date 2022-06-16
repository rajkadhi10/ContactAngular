//contact schema

const mongoose = require('mongoose')

const ContactsSchema = mongoose.Schema({
    contact:{
        type: String,
        required: true
    },
    company:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    }
})

const Contact = module.exports = mongoose.model('Contact', ContactsSchema)


