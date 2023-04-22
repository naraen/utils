(function () {
  'use strict';

  function* _permutations(arr, perm = [], depth = 0) {
    if (arr.length == 0) yield perm;
    for (var idx = 0; idx < arr.length; idx++) {
      var currentElement = arr[idx];
      perm.push(currentElement);
      arr.splice(idx, 1);
      yield* _permutations(arr, perm, depth + 1);
      arr.splice(idx, 0, currentElement);
      perm.pop();
    }
  }

  function permutations(input) {
    var cardinality = input.length;
    var output = [];
    var thisArray = new Array(cardinality).fill(0).map((_, idx) => idx);

    var source = Array.isArray(input) ? input : input.split('');
    for (var perm of _permutations(thisArray)) {
      var thisPerm = perm.map((v) => source[v]);
      output.push(Array.isArray(input) ? thisPerm : thisPerm.join(''));
    }
    return output;
  }
  module.exports = permutations;
})();
