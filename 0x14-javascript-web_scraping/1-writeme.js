#!/usr/bin/node

const fs = require('fs');
const file = process.argv[2];
const fileContent = process.argv[3];

fs.writeFile(file, fileContent, 'utf8', function (err) {
  if (err) {
    console.log(err);
    return;
  }
});
