const express = require('express');
const router = express.Router();
const Cat = require('../models/cate')
const mongoose = require('mongoose');




router.post('/', (req, res) => {

    const cat = new Cat({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        pro: req.body.pro
    });
    cat.save().then(reslt => {
        res.status(200).json(reslt);
    }).catch(err => {
        res.status(500).json(err);
    });
});

router.get('/', (req, res) => {

    Cat.find().exec().then(reslt => {
        res.status(200).json(reslt);
    }).catch(err => {

        res.status(500).json(err);
    });



});


router.get('/:id', (req, res) => {
    const id = req.params.id;

    Cat.findById(id).exec().then(reslt => {
        res.status(200).json(reslt);
    }).catch(err => {
        res.status(500).json(err);
    });

});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Cat.findByIdAndRemove(id).exec().then(reslt => {

        res.status(200).json(reslt);
    }).catch(err => {

        res.status(500).json(err);

    });

});
module.exports = router;