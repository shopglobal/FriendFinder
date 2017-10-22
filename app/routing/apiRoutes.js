function apiRoutes(app) {
    // ---------------------------------------
    // App setup - requirments
    // ---------------------------------------
    var express = require("express");
    var bodyParser = require("body-parser");
    var path = require("path");
    var fs = require("fs");

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.text());
    app.use(bodyParser.json({
        type: "application/vnd.api+json"
    }));

    themes = [ ];
    fs.readFile("./app/public/assets/bootswatch.json", "utf-8", function(err, data) {
                if (err) throw err;
                var arrayOfObjects = JSON.parse(data);
                themes.push(arrayOfObjects);
    });
    app.get("/api/themes", function (req, res) {
    res.json(themes);
    });
    //
    // ---------------------------------------
    //Require friends and make a dummy constructor to get api
    // ---------------------------------------
    var friendsMaker = require("../data/friends.js");
    var friends = new friendsMaker();

    // ---------------------TEST---------------
    var bob = new friendsMaker("Turns out you're a Work-a-holic", "http://images1.the-daily.buzz/uploads/2015/12/Trippin.jpg", [5, 3, 4, 4, 5, 1, 2, 2, 4, 1]);
    bob.newFriend();
    // ---------------------------------------

    // ---------------------------------------
    //Bringing in the friends and serving the API response
    // ---------------------------------------
    app.get("/api/friends", function (req, res) {

        res.json(friends.showFriends());
    });
    // ---------------------------------------
    //trigger friendsMaker constructor and displays your perfect match
    // ---------------------------------------
    app.post("/api/friends", function (req, res) {
        // executed on click
        var newRequest = req.body;
        // console.log(newNew);
        var newFriend = new friendsMaker(newRequest.name, newRequest.picture, newRequest.survey);
        newFriend.newFriend();
        console.log(newFriend.closestMatch);
        res.send(newFriend.closestMatch);
    });
}

module.exports = apiRoutes;