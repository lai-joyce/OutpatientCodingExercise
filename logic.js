'use strict';

const yelp = require("yelp-fusion");

//require Yelp Fusion API Key
const authentication = require("./keys.js");

const searchRequest = {
	term: "Four Barrel Coffee",
	location: "San Francisco, CA"
};

const client = yelp.client(authentication.apiKey);

client.search(searchRequest).then(response => {
	const firstResult = response.jsonBody.businesses[0];
	const prettyJson = JSON.stringify(firstResult, null, 4);
	console.log(prettyJson);
}).catch(e => {
	console.log(e);
});

