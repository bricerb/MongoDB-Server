// Importing modules
require('dotenv').config();

const express             = require('express');
const bodyParser          = require("body-parser");
const validator           = require("express-validator");
const mustacheExpress     = require("mustache-express");
const path                = require("path");
const routes              = require("./routes/index");
const chirpRoutes         = require("./routes/chirps");

// Initialze Express App
const app = express();

// Set Port
app.set('port', (process.env.PORT || 3000));

// Serve static files to server
app.use(express.static(path.join(__dirname, "public")));

// Setting up View Engine
app.engine("mustache", mustacheExpress());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "mustache");
app.set("layout", "layout");

// Body parser and validator implementation
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(validator());

// Routes
app.use(routes);
app.use('/chirps',chirpRoutes)

// Listening on port
app.listen(app.get('port'), () => {
    console.log('Serving up Mongos');
});
