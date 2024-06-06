#!/usr/bin/node
const { argv } = require('node:process');

const size = argv[2];

if (!Number(size)) {
  console.log('Missing size');
}

for (let i = 0; i < size; i++) {
  let row = '';
  for (let j = 0; j < size; j++) {
    row += 'X';
  }
  console.log(row);
}
