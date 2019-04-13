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