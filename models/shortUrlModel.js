"use strict";

const mongoose = require("mongoose");

const shortUrlSchema = mongoose.Schema({
   url: String,
   word: String
});

const ShortUrl = mongoose.model("ShortUrl", shortUrlSchema);

module.exports = ShortUrl;