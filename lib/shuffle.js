(function () {
  'use strict';

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function shuffle(input) {
    var length = input.length;
    var source = Array.isArray(input) ? input : input.split('');
    var shuffled = [...source];
    shuffled.forEach((v, idx) => {
      var randomPos = getRandom(idx, length - 1);
      shuffled[idx] = shuffled[randomPos];
      shuffled[randomPos] = v;
    });
    return Array.isArray(input) ? shuffled : shuffled.join('');
  }
  module.exports = shuffle;
})();
