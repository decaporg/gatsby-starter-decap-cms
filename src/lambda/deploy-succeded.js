//The following code tries to invoke the lighthouse score from netlify-ci
//Everytime a new PR is pushed and a new site is built on netlify-ci
//Normally this should post a new comment to the PR with the lighthouse score
//For more info follow: https://www.netlify.com/docs/functions/#event-triggered-functions
//import fetch from "node-fetch";
'use strict';

var request = require("request");

// populate environment variables locally.
require('dotenv').config()

//const WEBHOOK_ID = process.env.WEBHOOK_ID;


exports.handler = async (event, context) => {

        console.log('Function: Deploy Succeded');
        // parse the payload
        var payload = JSON.parse(unescape(event.body));
        console.log(payload);

// return fetch('enpoint', {method: 'POST'})
//         .then(data => ({statusCode: 200,
//                         body : 'ok, Go.'}))
//         .catch(error => ({statuscode: 422, body: String(error) }));

};