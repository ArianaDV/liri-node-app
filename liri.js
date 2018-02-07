require("dotenv").config();

var fs = require("fs");
var request = require("request");
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var Twitter = require('twitter');
var omdb = require('omdb-client');

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);


var userRequest = process.argv[2];
var songSearch = process.argv[3];
var movie = process.argv[3];

//Spotify App URL
var spot_apiURL = spotify
  .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx');

//Twitter App URL
var params = {screen_name: 'Ariana_DV4', count: 20}; 

//Recognize user input and execute appropriate request    
	switch(userRequest){
		// * `my-tweets`
		case "my-tweets":
			client.get('statuses/user_timeline', params, function (error, tweet_data, response) {
			var tweets = tweet_data.slice();
			
			for (var i = 0; i < tweets.length; i++) {
			console.log({user: tweets[i].user.name, date_created: tweets[i].created_at, status:tweets[i].text});	  
				}
			});
			break;
		// * `spotify-this-song`
		case "spotify-this-song":
			spotify.search({ type: 'track', query: songSearch, limit: 1}, function (err, data){
			if (err) {
			//if songSearch = "", make songSearch = "The Sign"
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
		// * `movie-this`
		case "movie-this":
			var oParams = {apiKey: '25a7f2c7', title: movie}; 
			omdb.get(oParams, function(err, movie){
			if (err) {
				return console.log("Error:" + err)
			}
			else{
				console.log("Title: " + movie.Title);
				console.log("Year: " + movie.Year);
				console.log("IMDB Rating: " + movie.imdbRating);
				console.log("Rotten Tomatoes Rating: " + movie.Ratings[1].Value);
				console.log("Country: " + movie.Country);
				console.log("Language: " + movie.Language);
				console.log("Plot: " + movie.Plot);
				console.log("Actors: " + movie.Actors);
				}
			})
			break;
	 };


    // * `do-what-it-says`