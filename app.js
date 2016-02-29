"use strict";

const express = require("express");
const app = express();

const cleanUrl = require("./api/cleanUrl");
const testUrl = require("./api/testUrl");
const shortenUrl = require("./api/shortenUrl");

const port = process.env.PORT || 2020;

app.get("/shorten/", function(req, res) {
    
    const url = cleanUrl(req.query.site);
    
    testUrl(url, function(err) {
        if (err) {
            return res.send(`ERROR: ${err}`);
        }
        
        shortenUrl(url, function(entry) {
            console.log("GOT THE ENTRY!");
            console.log(entry);
            
            res.send(entry.word);
        });
        
    });
});

app.listen(port, function() {
    console.log(`App listening on port ${port}`);
});

