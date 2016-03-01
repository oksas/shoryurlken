"use strict";

module.exports = function cleanUrl(url) {
    
    if (url.startsWith("http://") || url.startsWith("www.") || url.startsWith("https://")) {
        return url;
    }
    
    return "http://" + url;
};

