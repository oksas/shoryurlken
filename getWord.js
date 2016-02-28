"use strict";

const request = require("request");

// Need more modular way to define query params with the url
// And should probably move url and query params to a separate file, to separate
// the implementation from whatever API is actually being used? Am I already doing that?

module.exports = function getWord(callback) {
    const url = "http://api.wordnik.com/v4/words.json/randomWord";
    const query = "?hasDictionaryDef=false&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=2&maxLength=6";
    const key = "&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";
    
    let word = "";
    // what happens if word already found???
    request(url + query + key, function(err, res, body) {
            if (!err) {
                word = JSON.parse(body).word.toLowerCase();
                console.log(`just got word ${word}`);
                callback(null, word);
            } else {
                callback(err);
            }
        });
};

