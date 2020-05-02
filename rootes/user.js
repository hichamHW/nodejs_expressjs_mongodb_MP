 const express = require('express');
 const router = express.Router();
 const bcrypt = require('bcrypt');
 const User = require('../models/user');
 const mongoose = require('mongoose');
 const jwt = require('jsonwebtoken');


 router.post('/', (req, res) => {

     User.find({ email: req.body.email }).exec().then(users => {

         if (users.length >= 1) {
             return res.status(200).json({
                 message: "email is aready exist",
             });
         } else {
             bcrypt.hash(req.body.password, 10, (err, hash) => {
                 if (err) {
                     return res.status(500).json(err);
                 } else {

                     const user = new User({

                         _id: new mongoose.Types.ObjectId(),
                         email: req.body.email,
                         password: hash

                     });
                     user.save().then(resl => {
                         res.status(200).json({

                             message: "Account created"
                         });
                     }).catch(err => {
                         res.status(500 || 400).json(err);
                     })
                 }

             });


         }
     }).catch(err => {

         res.status(500).json(err);
     });


 });


 router.post('/login', (req, res) => {

     User.find({ email: req.body.email }).exec().then(result => {
         if (result.length >= 1) {


             bcrypt.compare(req.body.password, result[0].password, (err, reslt) => {

                 if (reslt) {

                     const token = jwt.sign({

                         email: result[0].email,
                         IdUser: result[0]._id
                     }, process.env.JWT_KEY, {
                         expiresIn: "1h"
                     })
                     return res.status(200).json({
                         message: "Authentification successful",
                         data: reslt,
                         token: token
                     });
                 }



                 return res.status(404).json({
                     message: "Password incorrect",
                     email: result[0].email,
                     password: result[0].password,
                     error: err
                 });


             });
         } else {
             return res.status(404).json({
                 message: "user not found",
             });


         }

     }).catch(err => {

         res.status(404).json(err);
     });
 });

 ///978-766
 ///424-853
 module.exports = router;