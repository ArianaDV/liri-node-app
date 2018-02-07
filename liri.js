require("dotenv").config();

var fs = require("fs");
var request = require("request");
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var Twitter = require('twitter');

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var userRequest = process.argv[2];
var songSearch = process.argv[3];

//Spotify App URL
var spot_apiURL = spotify
  .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx');

//Twitter App URL
var params = {screen_name: 'Ariana_DV4', count: 20}; 

//Recognize user input and execute appropriate request    
	switch(userRequest){

		case "my-tweets":
			console.log("TWEETS");	
			client.get('statuses/user_timeline', params, function (error, tweet_data, response) {
			var tweets = tweet_data.slice();
			
			for (var i = 0; i < tweets.length; i++) {
			console.log({user: tweets[i].user.name, date_created: tweets[i].created_at, status:tweets[i].text});	  
				}
			});
			break;
		
		case "spotify-this-song":
			console.log("SPOTIFY");
			spotify.search({ type: 'track', query: songSearch, limit: 1}, function (err, data){
			if (err) {
    		return console.log('Error occurred: ' + err);
  			}
  			else{
  			console.log(data.tracks.items[0].artists[0].name);
			console.log(data.tracks.items[0].name);
			console.log(data.tracks.items[0].album.external_urls.spotify);
			console.log(data.tracks.items[0].album.name);
  				}
 			});

			break;

		case "movie-this":
			console.log("MOVIE");
			break;
	 };

	// * `my-tweets`

    // * `spotify-this-song`

    // * `movie-this`

    // * `do-what-it-says`