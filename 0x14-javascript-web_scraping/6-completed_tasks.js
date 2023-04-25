#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request(url, function (err, response, body) {
  if (err == null) {
    const json = JSON.parse(body);
    const finished = {};
    for (let i = 0; i < json.length; i++) {
      if (json[i].completed === true) {
        if (finished[json[i].userId] === undefined) {
          finished[json[i].userId] = 0;
	}
        finished[json[i].userId]++;
      }
    }
    console.log(finished);
  }
});
