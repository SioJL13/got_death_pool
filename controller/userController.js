/*
 * Created Date: Saturday, April 13th 2019, 1:18:35 pm
 * Author: siomarajimenez
 * 
 * Copyright (c) 2019 Siomara Jimenez
 */

User = require('../model/userModel');

// Handle index actions
exports.index = function (req, res) {
    User.find({}, function (err, users) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        } else {
            res.json({
                status: "success",
                code: 200,
                message: "Users retrieved successfully",
                data: users
            })
        }
    });
};

// Handle create of new users
exports.new = function (req, res) {
    var user = new User();
    user.name = req.body.name ? req.body.name : user.name;
    user.email = req.body.email;
    user.password = req.body.password;

    // save the contact and check for errors
    user.save(function (err) {
        // if (err)
        //     res.json(err);

        res.json({
            message: 'New contact created!',
            data: user
        });
    });
};