/*
 * Created Date: Saturday, April 13th 2019, 1:18:35 pm
 * Author: siomarajimenez
 *
 * Copyright (c) 2019 Siomara Jimenez
 */

var mongoose = require('mongoose');

var questionsSchema = mongoose.Schema({
    isAlive: Boolean,
    isWhiteWalker: Boolean,
    character: String
});

var pollSchema = mongoose.Schema({
    userId: {
        type: String,
        require: true
    },
    code: {
        type: String,
        require: true
    },
    selections: [questionsSchema],
    isPregnant: {
        type: String,
        require: true
    },
    throneOwner: {
        type: String,
        require: true
    },
    nightKiller: {
        type: String,
        require: true
    },
    created: { 
        type: Date, 
        default: Date.now 
    }
});

var Poll = module.exports = mongoose.model('poll', pollSchema);