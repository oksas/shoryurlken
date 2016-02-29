"use strict";

module.exports = function cleanUrl(url) {
    
    if (url.startsWith("http://") || url.startsWith("www.")) {
        return url;
    }
    
    return "http://" + url;
};

