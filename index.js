#!/usr/bin/env node

'use strict';

const command = process.argv[2];
const input = process.argv[3];
const { anagram, shuffle, showHeap, sort, permutations } = require('./lib/');
switch (command) {
  case 'anagram':
    console.log(anagram(input));
    break;
  case 'permutations':
    console.log(permutations(input));
    break;
  case 'showHeap':
    console.log(showHeap(input));
    break;
  case 'shuffle':
    console.log(shuffle(input));
    break;
  case 'sort':
    console.log(sort(input));
    break;
  default:
    console.log('Unrecognized input');
}
