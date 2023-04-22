(function () {
  'use strict';

  //in place heap sort

  function sort(input) {
    var source = Array.isArray(input) ? input : input.split('');

    for (var idx = Math.floor(source.length / 2) + 1; idx >= 0; idx--)
      sink(source, source.length, idx);

    for (var idx = source.length - 1; idx >= 0; idx--) {
      exch(source, 0, idx, 1);
      sink(source, idx, 0);
    }

    return Array.isArray(input) ? input : source.join('');
  }

  function sink(arr, size, i) {
    var maxIdx = i;
    var leftChildIdx = 2 * i + 1;
    var rightChildIdx = 2 * i + 2;

    if (leftChildIdx < size && compare(arr, leftChildIdx, maxIdx)) {
      maxIdx = leftChildIdx;
    }
    if (rightChildIdx < size && compare(arr, rightChildIdx, maxIdx)) {
      maxIdx = rightChildIdx;
    }
    if (i != maxIdx) {
      exch(arr, i, maxIdx);
      sink(arr, size, maxIdx);
    }
  }

  function compare(arr, idx1, idx2) {
    return arr[idx1] > arr[idx2];
  }

  function exch(arr, idx1, idx2) {
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  }
  module.exports = sort;
})();
