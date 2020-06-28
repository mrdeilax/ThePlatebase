const mongoose = require('mongoose');

const plateSchema = mongoose.Schema({
    number: {type: String, required: true},
    fname: {type: String, required: true},
    lname: {type: String, required: true}
});

module.exports = mongoose.model('Plate', plateSchema);

