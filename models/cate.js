const mongoose = require('mongoose');
const shemacate = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,

});


module.exports = mongoose.model('Cat', shemacate);