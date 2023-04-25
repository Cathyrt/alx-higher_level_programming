#!/usr/bin/node

const request = require('request');
const movieId = process.argv[2];

request('https://swapi-api.alx-tools.com/api/films/'.concat(movieId), function (err, response, body) {
  if (err) {
    return console.log(err);
  }
  console.log(JSON.parse(body)['title']);
});
