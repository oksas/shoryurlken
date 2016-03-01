"use strict";

const db = require("./dbAPI");

function findUrl(word, callback) {
    
    db.findByWord(word, function(err, entry) {
        if (err) {
            return callback(err);
        }
        
        if (entry) {
            console.log("found the word in the db; returning the entry");
            callback(null, entry);
        } else {
            callback("word not found :(");
        }
        
    });

}

module.exports = findUrl;