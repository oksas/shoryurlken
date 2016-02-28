"use strict";

const getWord = require("./getWord");
const ShortUrl = require("./models/shortUrlModel");
const db = require("./api/dbAPI");

function shortenUrl(url, callback) {
    
    db.findByUrl(url, function(err, entry) {
        
        if (entry) {
            console.log("that url already exists");
            callback(entry);
        } else {
            console.log("that url does NOT already exist");
            getWord(function(err, word) {
                if (err) console.error(err);
                var entry = new ShortUrl({"url": url, "word": word});
                db.saveEntry(entry, function(err, savedEntry) {
                    // handle the error!
                    callback(savedEntry);
                });
                
            });
        }
        
    });

}

module.exports = shortenUrl;