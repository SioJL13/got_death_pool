/*
 * Created Date: Saturday, April 13th 2019, 12:01:35 pm
 * Author: Siomara Jimenez
 * 
 * Copyright (c) 2019 Siomara Jimenez
*/

// Call libraries
require('dotenv').config();
let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

// Setup app
let app = express();

var port = process.env.PORT || 5001;

// Get routes
let apiRoutes = require('./api/api-routes');

const allowedOrigins = ["http://localhost:8000", "http://127.0.0.1:5500"]

app.use(function (req, res, next) {
    var origin = req.headers.origin;
    if (allowedOrigins.indexOf(origin) > -1) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    return next();
});

// Configure body parser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

// Connect to MongoDB
// Connecting to the database
mongoose.connect(process.env.MONGOLAB_URI, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

// Use api routes
app.use('/api', apiRoutes);

app.listen(port, function() {
    console.log("Running on " + port); 
});