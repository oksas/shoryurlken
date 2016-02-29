"use strict";

const request = require("request");

module.exports = function testUrl(url, callback) {
    
    request(url, function(err, res) {
        if (err) {
            return callback(err);
        }
        
        callback(null);
    });
};

