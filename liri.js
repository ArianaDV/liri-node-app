require("dotenv").config();

var fs = require("fs");
var request = require("request");
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var Twitter = require('twitter');

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var userRequest = process.argv[2];

var apiURL = spotify
  .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  .then(function(data) {
    console.log(data); 
  })
// console.log(apiURL);


//Recognize user input and execute appropriate request    
	// switch(userRequest){

	// 	case "my-tweets":
	// 	console.log("TWEETS");
	// 	break;

	// 	case "spotify-this-song":
	// 	console.log("SPOTIFY");
	// 	spotify.search()
	// 	break;

	// 	case "movie-this":
	// 	console.log("MOVIE");
	// 	break;
	// };
	// * `my-tweets`

    // * `spotify-this-song`

    // * `movie-this`

    // * `do-what-it-says`