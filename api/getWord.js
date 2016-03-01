"use strict";

const request = require("request");
const db = require("./dbAPI");

module.exports = function getWord(callback) {
    const url = "http://api.wordnik.com/v4/words.json/randomWord";
    const query = "?hasDictionaryDef=false&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=2&maxLength=6";
    const key = "&api_key=c5c8b35a654770244000c0bc3670b4c0ebd757a1746659d02";
    
    let word = "";
    
    request(url + query + key, function(err, res, body) {
        if (err) {
            return callback(err);
        }
        
        word = JSON.parse(body).word.toLowerCase();
        
        db.findByWord(word, function(err, entry) {
            if (err) {
                return callback(err);
            }
            
            if (entry) {
                return getWord(callback);
            }
            
            callback(null, word);
            
        });
    });
    
};

