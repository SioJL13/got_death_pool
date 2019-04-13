/*
 * Created Date: Saturday, April 13th 2019, 1:18:35 pm
 * Author: siomarajimenez
 *
 * Copyright (c) 2019 Siomara Jimenez
 */

var mongoose = require('mongoose');

// Setup schema
var userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// Export schema
var User = module.exports = mongoose.model('user', userSchema);
