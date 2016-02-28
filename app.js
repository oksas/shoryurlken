"use strict";

const express = require("express");
const shortenUrl = require("./shortenUrl");

var url = "http://jessicamcquillen.archi";

shortenUrl(url, function(entry) {
    console.log("GOT THE ENTRY!!!!");
    console.log(entry);
    console.log(entry.word);
});


