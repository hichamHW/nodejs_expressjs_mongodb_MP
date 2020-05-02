const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const mongoose = require('mongoose');



router.get('/:keyword', (req, res) => {
    const q = req.params.keyword;
    console.log("is query " + q);

    Product.find({
        "name": /`${q}`/
    }).exec().then(result => {

        res.status(200).json(result);
    }).catch(err => {
        res.status(500).json(err);
    });


});
router.delete('/:id', (req, res) => {

    const id = req.params.id;
    Product.findByIdAndDelete(id).exec().then(reslt => {

        res.status(200).json(reslt);
    }).catch(err => {

        res.status(500 || 400).json(err);
    });

});
router.put('/:id', (req, res) => {

    const id = req.params.id;
    const product = new Product({

        name: req.body.name,
        price: req.body.price,
        type: req.body.type,
        created: Date.now

    })
    Product.findOneAndUpdate(id, product).exec().then(reslt => {
        res.status(200).json(reslt);
    }).catch(err => {
        res.status(500).json(err);
    });
    // Product.findByIdAndDelete(id).exec().then(reslt => {

    //     product.save().then(() => {

    //         res.status(200).json({
    //             "message": "is save"
    //         });
    //     })

    // }).catch(err => {




    // });

});

router.post('/', (req, res) => {

    console.log('is body ' + req.body.value);
    const product = new Product({

        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
        type: req.body.type
    });
    product.save().then(result => {

        console.log(result);

        res.status(200).json(result);

    }).catch(err => {

        console.log(err);
    });


});

router.get('/', (req, res) => {


    Product.find().exec()
        .then(rslt => {

            res.status(200).json(rslt);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

router.get('/:id', (req, res) => {
    const ida = req.params.id;
    console.log("is id " + ida);
    Product.findById(ida)
        .exec()
        .then(result => {

            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json(err);
        });


});
module.exports = router;