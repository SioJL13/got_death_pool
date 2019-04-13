/*
* Created Date: Saturday, April 13th 2019, 12:28:48 pm
* Author: siomarajimenez
* 
* Copyright (c) 2019 Siomara Jimenez
*/

let router = require('express').Router();

// Default api response
router.get('/', function(req,res) {
    res.json({
        "status": "GOT death pool is working",
        "message": "Valar Morghulis"
    });
});

// Import user controller
var userController = require('../controller/userController');

// User routes
router.route('/users')
    .get(userController.index)
    .post(userController.new);


module.exports = router;