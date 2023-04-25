#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request(url, function (err, response, body) {
  if (err) {
    console.log(err);
  }
  let tasks = JSON.parse(body);
  let finished = {};
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i]['completed'] === true) {
      if (finished[tasks[i]['userId']]) {
        finished[tasks[i]['userId']]++;
      } else {
	finished[tasks[i]['userId']] = 1;
      }
    }
  }
  console.log(finished);
});
