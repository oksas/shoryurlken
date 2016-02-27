const mongoose = require("mongoose");
const urlEntry = require("./models/shortUrlModel");

mongoose.connect("mongodb://localhost/url-shortener");

module.exports = function() {
    
    const findByUrl = function(url) {
        // if  url found, return whole object
        // else return null
    };
    
    const findByWord = function(word) {
        // if word found, return whole object
        // else return null
    };
    
    const saveEntry = function(entry) {
        // new it up using the mongoose model
        // .save, where cb gets (err, savedObj)
        // return saved obj? (if no err)
    };
    
    return {
      findByUrl: findByUrl,
      findByWord: findByWord,
      saveEntry: saveEntry
    };
}