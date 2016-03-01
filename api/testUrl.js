"use strict";

const request = require("request");

module.exports = function testUrl(url, callback) {
    
    request(url, function(err, res) {
        if (err) {
            return callback("Not a valid URL. Did you spell it right?");
        }
        
        callback(null);
    });
};

