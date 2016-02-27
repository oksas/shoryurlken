const request = require("request");
const isWordUsed = require("./isWordUsed");

// Need more modular way to define query params with the url
// And should probably move url and query params to a separate file, to separate
// the implementation from whatever API is actually being used? Am I already doing that? 

module.exports = function getRandomUniqueWord() {
    const url = "http://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=false&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=2&maxLength=6&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";
    
    request(url, function(err, res, body) {
    if (!err && !isWordUsed(word)) {
        const word = JSON.parse(body).word.toLowerCase();
        return word;
    }
});
};

