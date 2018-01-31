require("dotenv").config();

var fs = require("fs");
var request = require("request");
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var Twitter = require('twitter');

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var userRequest = process.argv[2];
// var my-tweets = inputString[2];
// var spotify-this-song = inputString[3];
// var movie-this = inputString[4];
// var do-what-it-says = inputString[5];


    // * `my-tweets`
switch(userRequest){

	case "my-tweets":
		console.log("TWEETS");
		break;

	case "spotify-this-song":
		console.log("SPOTIFY");
		break;

	case "movie-this":
		console.log("MOVIE");
		break;
};

    // * `spotify-this-song`

    // * `movie-this`

    // * `do-what-it-says`