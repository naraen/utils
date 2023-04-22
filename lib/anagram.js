(function () {
  'use strict';
  const fs = require('fs');
  const fnDictionary = './lib/anagram_dictionary.txt';

  function indexFile(dict, length) {
    fs.readFileSync(fnDictionary, 'utf-8')
      .split('\n')
      .filter((w) => !w.match(/[^a-z]/) && w.length == length)
      .forEach((w) => indexWord(w, dict));
  }

  function indexWord(word, head) {
    word
      .split('')
      .sort()
      .reduce(
        (memo, letter, idx) => {
          if (!memo.currPosition[letter]) memo.currPosition[letter] = {};
          memo.currPosition = memo.currPosition[letter];
          if (idx == word.length - 1) {
            if (!memo.currPosition.words) memo.currPosition.words = [];
            memo.currPosition.words.push(word);
          }
          return memo;
        },
        { currPosition: head }
      );
  }

  function findWord(dict, letters) {
    var thisFind = letters
      .toLowerCase()
      .split('')
      .sort()
      .reduce((currDic, letter) => {
        if (currDic && currDic[letter]) return currDic[letter];
      }, dict);

    return thisFind ? thisFind.words : [];
  }

  function anagram(letters) {
    if (!letters) return [];
    var dict = {};

    indexFile(dict, letters.length);
    return findWord(dict, letters);
  }
  module.exports = anagram;
})();
