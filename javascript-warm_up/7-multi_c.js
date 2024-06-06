#!/usr/bin/node
const { argv } = require('node:process');

const argsLength = argv[2];

for (let i = 0; i < argsLength; i++) {
  console.log('C is fun');
}
