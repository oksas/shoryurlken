"use strict";

const mongoose = require("mongoose");
const ShortUrl = require("../models/shortUrlModel");

mongoose.connect("mongodb://localhost/url-shortener");

module.exports = {
    
    findByUrl: function(url, callback) {
        ShortUrl.findOne({ "url": url }, function(err, shortUrl) {
            if (err) {
                return callback(err);
            }
            
            if (shortUrl) {
                callback(null, shortUrl);
            } else {
                callback();
            }
            
        });
    },
    
    findByWord: function(word, callback) {
        ShortUrl.findOne({ "word": word }, function(err, shortUrl) {
            if (err) {
                return callback(err);
            }
            
            if (shortUrl) {
                callback(null, shortUrl);
            } else {
                callback();
            }
        });
    },
    
    saveEntry: function(entry, callback) {
        entry.save(function(err, entry) {
            if (err) {
                return callback(err);
            }
            
            callback(null, entry);
        });
    }
};