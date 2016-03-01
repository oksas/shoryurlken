"use strict";

const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const app = express();

const cleanUrl = require("./api/cleanUrl");
const testUrl = require("./api/testUrl");
const shortenUrl = require("./api/shortenUrl");
const findUrl = require("./api/findUrl");

const port = process.env.PORT || 2020;

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    console.log(req.headers);
    res.render("index", {error: ""});
});

app.get("/:word", function(req, res) {
    const word = req.params.word;
   
    findUrl(word, function(err, entry) {
        if (err) {
            return res.render("index", {error: err, url: ""});
        }
    
    res.redirect(entry.url);
    });
});

app.post("/shorten", urlencodedParser, function(req, res) {
    
    const url = cleanUrl(req.body.url);
    
    testUrl(url, function(err) {
        if (err) {
            return res.render("index", {error: err, url: ""});
        }
        
        shortenUrl(url, function(err, entry) {
           if (err) {
               return res.render("index", {error: err, url: ""});
           }
            
            res.render("index", {error: "", url: `${req.headers.host}/${entry.word`})
        });
        
    });
});

app.listen(port, function() {
    console.log(`App listening on port ${port}`);
});

