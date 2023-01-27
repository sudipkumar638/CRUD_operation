const mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    status: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,

    },
    phoneno: {
        type: String,
        required: true,

    },
    address: {
        type: String,

    },
});

const user = mongoose.model('USERDATA', userSchema);
module.exports = user