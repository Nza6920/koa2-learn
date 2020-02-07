const mongoose = require('mongoose')

// "建表"
let personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

module.exports = mongoose.model('Person', personSchema)