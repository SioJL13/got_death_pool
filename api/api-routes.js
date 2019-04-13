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
var pollController = require('../controller/pollController');

// User routes
router.route('/users')
    .get(userController.index)
    .post(userController.new);

router.route('/polls')
    .post(pollController.new);


module.exports = router;