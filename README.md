# liri-node-app

This app uses node.js to console log movie and song info on the terminal using the OMDB Api and Spotify Api. 

To console log movie info, type into terminal:
		node liri.js movie-this "movie-name"
	
	example: node. liri.js movie-this space-jam

To console log song info, type into terminal:
		node liri.js spotify-this-song "song-name"	
	example: node. liri.js spotify-this-song fancy

With is app, you can also console log your tweets using the twitter API. You can do this by changing the screen_name in the params variable on the liri.js file to the screen name of the person whose tweets you'd like to retrieve.

Then type into terminal:
			node liri.js my-tweets

This is currently set to retrieve the last 20 tweets, but you can alter this by changing the count in the params variable.