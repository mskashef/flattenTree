var { flattenTree } = require('./flatten-tree');

const tree = {
  id: 1,
  title: 'Root',
  description: 'This is the root node',
  children: [
    {
      id: 2,
      title: 'Level 1 - item 1',
      description: 'Some description',
      children: [
        {
          id: 5,
          title: 'Level 2 - item 1',
          description: 'Some description',
          children: [],
        },
        {
          id: 6,
          title: 'Level 2 - item 2',
          description: 'Some description',
          children: [],
        },
      ],
    },
    {
      id: 3,
      title: 'Level 1 - item 2',
      description: 'Some description',
      children: [
        {
          id: 7,
          title: 'Level 2 - item 1',
          description: 'Some description',
          children: [
            {
              id: 8,
              title: 'Level 3 - item 1',
              description: 'Some description',
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: 4,
      title: 'Level 1 - item 3',
      description: 'Some description',
      children: [],
    },
  ],
};

console.log(flattenTree(tree));
