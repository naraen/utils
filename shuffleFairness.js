'use strict';

const { shuffle } = require('./lib');

var a = JSON.parse('[' + (process.argv[2] || '1, 2, 3, 4, 5, 6') + ']');

console.log('Input', JSON.stringify(a));

var frequency = new Array(a.length)
  .fill([])
  .map(() => new Array(a.length).fill(0));
var iterationCount = 1000;

for (var i = 0; i < iterationCount; i++) {
  var result = shuffle([...a]);
  result.forEach((v, idx) => {
    frequency[v - 1][idx]++;
  });
}

console.log('-'.repeat(20), ' Frequency Map ', '-'.repeat(20));
console.log(
  frequency.map((v) =>
    v.map((f) => parseInt((f / iterationCount) * 10000) / 100)
  )
);
