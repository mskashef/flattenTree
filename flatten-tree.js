(function (exports) {
  'use strict';
  exports.flattenTree = (function () {
    /**
     * @private
     * @param {Object} tree
     * @returns {Array} Flatten tree
     */
    function ft(tree) {
      const flatten = [tree];
      for (let i = 0; i < flatten.length; i++) {
        if (!flatten[i].children) continue;
        flatten.push(...flatten[i].children);
        delete flatten[i].children;
      }
      return flatten;
    }

    /**
     * Algorithm from dynamic programming. In converts an Object tree
     * to a flatten array.
     *
     * @example
     * var {flattenTree} = require('path-to-flatten-tree/' + 'flatten-tree');
     * console.log(flattenTree({id: 1, children: [{id: 2, children: []}, {id: 3, children: []}]})); // 'ple'
     *
     * @public
     * @module flattenTree
     * @param {Object} tree the source tree.
     * @return {Array} Tree elements in flatten format.
     */
    return function (tree) {
      return ft(tree);
    };
  })();
})(typeof window === 'undefined' ? module.exports : window);
