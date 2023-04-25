#!/usr/bin/node

const request = require('request');
const apiUrl = process.argv[2];

request(apiUrl, function (err, response, body) {
  if (err) {
    console.log(err);
  } else if (body) {
    const films = JSON.parse(body).results.filter(
      x => x.characters.find(y => y.match(/\/people\/18\/?$/))
    );

    console.log(films.length);
  }
});
