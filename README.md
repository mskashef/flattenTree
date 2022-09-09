# Flatten Tree

A light-weight module to convert object trees to flat lists.

## Sample Usage

```js
const flattenTree = require("@mskashef/flatten-tree");
console.log(
  flattenTree({
    name: "item1",
    children: [
      {
        name: "item2",
        children: [{ name: "item3" }],
      },
      { name: "item4" },
    ],
  })
);
/* 
OUTPUT:
[
    {id: 1, name: 'item1'},
    {id: 2, name: 'item2'},
    {id: 3, name: 'item3'},
    {id: 4, name: 'item4'}
]
*/
```

The key name for `children` is also customizable; The default key is the word `"children"`. To customize the key(s) simply pass an array of keys to the function:

```js
flattenTree(
  {
    name: "item1",
    myCustomKey: [
      {
        name: "item2",
        myCustomKey: [{ name: "item3" }],
      },
      { name: "item4" },
    ],
  },
  ["myCustomKey"]
);
```

Also your objects can have multiple children with different key names. You can customize it like this:

```js
flattenTree(
  {
    name: "item1",
    myCustomKey1: [
      {
        name: "item2",
        myCustomKey2: [{ name: "item3" }],
      },
      { name: "item4" },
    ],
  },
  ["myCustomKey1", "myCustomKey2"]
);
```

You can even pass array of trees to the module.

```js
const tree1 = {...}
const tree2 = {...}
const tree3 = {...}

const arrayOfTrees = [tree1, tree2, tree3]

flattenTree(arrayOfTrees, ['children'])
```