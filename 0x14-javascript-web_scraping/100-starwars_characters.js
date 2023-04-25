#!/usr/bin/node
const request = require('request');
const BASE_URL = 'https://swapi-api.alx-tools.com/api';

if (process.argv.length > 2) {
  request(`${BASE_URL}/films/${process.argv[2]}/`, (err, response, body) => {
    if (err) {
      console.log(err);
    }
    const movies = JSON.parse(body).characters;

    movies.forEach(element => {
      request(element, (err, response, body) => {
        if (err) {
          console.log(err);
        }
        console.log(JSON.parse(body).name);
      });
    });
  });
}
