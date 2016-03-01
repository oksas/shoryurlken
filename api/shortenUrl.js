"use strict";

const getWord = require("./getWord");
const ShortUrl = require("../models/shortUrlModel");
const db = require("./dbAPI");

function shortenUrl(url, callback) {
    
    db.findByUrl(url, function(err, entry) {
        if (err) {
            return callback(err);
        }
        
        if (entry) {
            console.log("that url already exists");
            callback(null, entry);
        } else {
            console.log("that url does NOT already exist");
            getWord(function(err, word) {
                if (err) {
                    return callback(err);
                }
                var entry = new ShortUrl({"url": url, "word": word});
                db.saveEntry(entry, function(err, savedEntry) {
                    if (err) {
                        return callback(err);
                    }
                    
                    callback(null, savedEntry);
                });
                
            });
        }
        
    });

}

module.exports = shortenUrl;