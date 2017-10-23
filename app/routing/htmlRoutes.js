function htmlRoutes(app) {
    var express = require("express");
    var bodyParser = require("body-parser");
    var path = require("path");

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.text());
    app.use(bodyParser.json({
        type: "application/vnd.api+json"
    }));

    app.get("/", function (req, res) {

        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    // app.get("/themes", function (req, res) {
    //     res.sendFile(path.join(__dirname, "../public/assets/bootswatch.json"));
    // });

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("/styles", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/assets/styles.js"));
    });

    app.use(express.static(path.join(__dirname, '../public/assets/')));

}

module.exports = htmlRoutes;