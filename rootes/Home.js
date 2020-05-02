const express = require('express');

const router = express.Router();

router.all('/', (req, res, next) => {

    res.status(200).json({
        "message": "Is Home",
        "Method": req.method
    });


});

module.exports = router;