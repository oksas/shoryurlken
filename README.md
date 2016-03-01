# Shoryurlken

Allows users to input URLs, and spits out a shortened version of the URL, which
is a simple redirect from the server running this app.

## See it in action

The app is currently [running on Heroku](https://shoryurlken.herokuapp.com/).

## How it works

When a user submits a URL for shortening, a random word is fetched from the
[Wordnik API ](http://developer.wordnik.com/), and that word is used to generate
a shortened version of the user's URL. For example, if a user enters the
following URL for shortening:

`https://github.com/oksas/url-shortener`

then the server will grab a word from Wordnik, save an entry in the database
with the user-submitted URL and the fetched word, and give the user a shortened
link on the server that uses that word, such as:

`http://shoryurlken.herokuapp.com/mogwai`




