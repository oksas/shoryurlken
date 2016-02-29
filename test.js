"use strict";

const request = require("request");

request("http://google.com", function(err, res, body) {
    console.log("hahahaha");
    if (err) console.error(err); 
});