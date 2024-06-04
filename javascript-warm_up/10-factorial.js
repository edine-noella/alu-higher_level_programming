#!/usr/bin/node
const { argv } = require('node:process');

function factorial (n) {
  if (n === 0 || n === 1 || !Number(n)) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(argv[2]));
