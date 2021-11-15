(function (exports) {
  'use strict';
  exports.flattenTree = (function () {
    /**
     * @private
     * @param {Object} tree The Object tree
     * @returns {Array} The flatten tree
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
     * var { flattenTree } = require('./flatten-tree');
     *
     * const tree = {
     *   id: 1,
     *   title: 'Root',
     *   description: 'This is the root node',
     *   children: [
     *     {
     *       id: 2,
     *       title: 'Level 1 - item 1',
     *       description: 'Some description',
     *       children: [
     *         {
     *           id: 5,
     *           title: 'Level 2 - item 1',
     *           description: 'Some description',
     *           children: [],
     *         },
     *         {
     *           id: 6,
     *           title: 'Level 2 - item 2',
     *           description: 'Some description',
     *           children: [],
     *         },
     *       ],
     *     },
     *     {
     *       id: 3,
     *       title: 'Level 1 - item 2',
     *       description: 'Some description',
     *       children: [
     *         {
     *           id: 7,
     *           title: 'Level 2 - item 1',
     *           description: 'Some description',
     *           children: [
     *             {
     *               id: 8,
     *               title: 'Level 3 - item 1',
     *               description: 'Some description',
     *               children: [],
     *             },
     *           ],
     *         },
     *       ],
     *     },
     *     {
     *       id: 4,
     *       title: 'Level 1 - item 3',
     *       description: 'Some description',
     *       children: [],
     *     },
     *   ],
     * };
     *
     * console.log(flattenTree(tree));
     *
     * @public
     * @module flattenTree
     * @param {Object} tree The source tree.
     * @return {Array} Tree elements in flatten format.
     */
    return function (tree) {
      return ft(tree);
    };
  })();
})(typeof window === 'undefined' ? module.exports : window);
