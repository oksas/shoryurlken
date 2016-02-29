"use strict";

const express = require("express");
const app = express();

const shortenUrl = require("./shortenUrl");

const url = "http://butt.archi";

shortenUrl(url, function(entry) {
    console.log("GOT THE ENTRY!!!!");
    console.log(entry);
    console.log(entry.word);
});

/*
    take url in
    make request to that url; if status code is ok, do the usual stuff
    otherwise, tell the user there's something wrong with it

*/

