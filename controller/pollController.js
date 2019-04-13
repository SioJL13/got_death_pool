/*
 * Created Date: Saturday, April 13th 2019, 2:40:11 pm
 * Author: siomarajimenez
 * 
 * Copyright (c) 2019 Siomara Jimenez
 */

Poll = require('../model/pollModel');

exports.new =  function(req,res) {
    var poll = new Poll();

    poll.userId = req.body.userId;
    poll.code = req.body.poll;
    poll.selections = req.body.selections;
    poll.isPregnant = req.body.isPregnant;
    poll.throneOwner = req.body.throneOwner;
    poll.nightKiller = req.body.nightKiller;
    
    poll.save(function (err) {
        res.json({
            "message": "Poll created",
            data: poll
        });
    });
}