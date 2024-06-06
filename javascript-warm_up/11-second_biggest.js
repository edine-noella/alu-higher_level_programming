#!/usr/bin/node
const { argv } = require('node:process');

let secondLargest = -Infinity;
let largest = -Infinity;

for (let i = 2; i < argv.length; i++) {
  const num = parseFloat(argv[i]);
  if (num > largest) {
    secondLargest = largest;
    largest = num;
  } else if (num > secondLargest && num !== largest) {
    secondLargest = num;
  }
}

console.log(secondLargest !== -Infinity ? secondLargest : 0);
