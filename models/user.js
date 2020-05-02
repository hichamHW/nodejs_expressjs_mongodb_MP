const mongoose = require('mongoose');
const shemauser = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: String,
    password: String

});


module.exports = mongoose.model('User', shemauser);