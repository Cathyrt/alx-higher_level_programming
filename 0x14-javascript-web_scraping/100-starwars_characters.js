#!/usr/bin/node

const request = require('request');
const movieId = process.argv[2];
const url = 'https://swapi-api.alx-tools.com/api/films/';

request(url + movieId, function (err, response, body) {
  if (err) {
    console.log(err);
  }
  const movie = JSON.parse(body).characters;
  characters.forEach((character) => {
    request(element, (err, res, body) => {
      if (err) {
        console.log(err);
      }
      console.log(JSON.parse(body).name);
    });
  });
});
