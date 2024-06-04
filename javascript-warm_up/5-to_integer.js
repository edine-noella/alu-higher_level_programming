#!/usr/bin/node
const { argv } = require('node:process');

console.log(Number(argv[2]) ? `My number: ${argv[2]}` : 'Not a number');
