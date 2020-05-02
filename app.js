const express = require('express');
const app = express();
const mongoose = require('mongoose');
const productrouter = require('./rootes/product');

const catrouter = require('./rootes/cat');
const homerouter = require('./rootes/Home');
const userrouter = require('./rootes/user');
const bodyParser = require('body-parser');
mongoose.connect('mongodb://localhost:27017/meanjs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/product', productrouter);
app.use('/cate', catrouter);
app.use('/', homerouter);
app.use('/register', userrouter)

module.exports = app;