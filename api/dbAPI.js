"use strict";

const mongoose = require("mongoose");
const ShortUrl = require("../models/shortUrlModel");

mongoose.connect("mongodb://localhost/url-shortener");

module.exports = {
    
    findByUrl: function(url, callback) {
        ShortUrl.findOne({ "url": url }, function(err, shortUrl) {
            // handle the error!
            if (shortUrl) {
                callback(null, shortUrl);
            } else {
                callback();
            }
            
        });
    },
    
    findByWord: function(word, callback) {
        ShortUrl.findOne({ "word": word }, function(err, shortUrl) {
            // handle the error!
            if (shortUrl) {
                callback(null, shortUrl);
            } else {
                callback();
            }
        });
    },
    
    saveEntry: function(entry, callback) {
        entry.save(function(err, entry) {
            // handle the error!
            console.log("saved the entry to database !!!!!!");
            callback(null, entry);
        });
    }
};