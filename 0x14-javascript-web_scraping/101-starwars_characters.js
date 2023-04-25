#!/usr/bin/node

const request = require('request');
const BASE_URL = 'https://swapi-api.alx-tools.com/api';

if (process.argv.length > 2) {
  request(`${BASE_URL}/films/${process.argv[2]}/`, (err, response, body) => {
    if (err) {
      console.log(err);
    }
    const movies = JSON.parse(body).characters;
    const charactersName = movies.map(
      url => new Promise((resolve, reject) => {
        request(url, (err, response, body) => {
          if (err) {
            reject(err);
          }
          resolve(JSON.parse(body).name);
        });
      }));

    Promise.all(charactersName)
      .then(names => console.log(names.join('\n')))
      .catch(err => console.log(err));
  });
}
