(function () {
  'use strict';

  function* depthFirstHeapWalker(list, idx = 0, depth = 0) {
    if (idx >= list.length) return;
    yield* depthFirstHeapWalker(list, 2 * idx + 1, depth + 1);
    yield { value: list[idx], depth };
    yield* depthFirstHeapWalker(list, 2 * idx + 2, depth + 1);
  }

  function displayHeap(input, spacing = 4) {
    var output = '';
    for (var node of depthFirstHeapWalker(input)) {
      output += `${' '.repeat(node.depth * spacing)}   ${node.value}\n`;
    }
    return output;
  }

  module.exports = displayHeap;
})();
