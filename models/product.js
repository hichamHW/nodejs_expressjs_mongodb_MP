const mongoose = require('mongoose');
const Cat = require('../models/cate');
const productShema = mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    price: Number,
    type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cat',
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Product', productShema);