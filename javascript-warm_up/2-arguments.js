#!/usr/bin/node

const { argv } = require('node:process');

const argsLength = argv.length - 2;

console.log(argsLength === 0 ? 'No argument' : argsLength === 1 ? 'Argument found' : 'Arguments found');
