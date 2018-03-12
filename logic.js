'use strict';

const yelp = require("yelp-fusion");
// const request = require("request");

//require Yelp Fusion API Key
const authentication = require("./keys.js");


function grabPTinfo(location) {

	if(!location) location = "San Mateo";

	const queryURL = "https://api.yelp.com/v3/businesses/?location=" + location
	+ "&apikey=" + authentication.apiKey; 


	const searchRequest = {
		term: "Physical Therapists",
		location: queryURL
	};

	const client = yelp.client(authentication.apiKey);

	client.search(searchRequest).then(response => {
		const firstResult = response.jsonBody.businesses[0];
		const totalNumberPTResults = response.jsonBody.total;
		const prettyJson = JSON.stringify(firstResult, null, 4);
		const prettyJsonTotal = JSON.stringify(totalNumberPTResults, null, 4);
		console.log(prettyJson);
		console.log(prettyJsonTotal);
	}).catch(e => {
		console.log(e);
	});
}

grabPTinfo("Berkeley");

