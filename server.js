// ---------------------------------------
//This is our point of entry
//Start express app and Direct it to Routes
// ---------------------------------------

var htmlPath = require("./app/routing/htmlRoutes.js");
var apiPath = require("./app/routing/apiRoutes.js");
var PORT = process.env.PORT || 8080;

// express.static
var express = require("express");
var app = express();

app.listen(PORT, function () {
    console.log("Server listening on PORT " + PORT);
});

var apiRoutes = new apiPath(app);
var htmlRoutes = new htmlPath(app);

