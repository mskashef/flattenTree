const flattenTree = require("..");

test("Key: onotherChildrenKey", () => {
  expect(
    JSON.stringify(
      flattenTree(
        {
          name: "item1",
          onotherChildrenKey: [
            {
              name: "item2",
              onotherChildrenKey: [{ name: "item3" }],
            },
            { name: "item4" },
          ],
        },
        ["onotherChildrenKey"]
      )
    )
  ).toBe(
    '[{"name":"item1"},{"name":"item2"},{"name":"item3"},{"name":"item4"}]'
  );
});

test("Key: children", () => {
  expect(
    JSON.stringify(
      flattenTree({
        name: "item1",
        children: [
          {
            name: "item2",
            children: [
              {
                name: "item3",
              },
              {
                name: "item4",
                children: [
                  {
                    name: "item5",
                  },
                  {
                    name: "item6",
                  },
                ],
              },
              {
                name: "item7",
              },
            ],
          },
          {
            name: "item8",
            children: [
              {
                name: "item9",
              },
              {
                name: "item10",
              },
            ],
          },
        ],
      })
    )
  ).toBe(
    '[{"name":"item1"},{"name":"item2"},{"name":"item3"},{"name":"item4"},{"name":"item5"},{"name":"item6"},{"name":"item7"},{"name":"item8"},{"name":"item9"},{"name":"item10"}]'
  );
});

test("Testing Multiple keys", () => {
  expect(
    JSON.stringify(
      flattenTree(
        {
          name: "item 1",
          "children-set-1": [
            {
              name: "item2",
              children: [
                {
                  name: "item3",
                },
                {
                  name: "item4",
                  "children-set-3": [
                    {
                      name: "item5",
                    },
                    {
                      name: "item6",
                    },
                  ],
                },
              ],
              "children-set-2": [
                {
                  name: "item7",
                },
              ],
            },
          ],
          "children-set-2": [
            {
              name: "item8",
              "children-set-3": [
                {
                  name: "item9",
                },
                {
                  name: "item10",
                },
              ],
            },
          ],
        },
        ["children-set-1", "children-set-2", "children-set-3", "children"]
      )
    )
  ).toBe(
    '[{"name":"item 1"},{"name":"item2"},{"name":"item3"},{"name":"item4"},{"name":"item5"},{"name":"item6"},{"name":"item7"},{"name":"item8"},{"name":"item9"},{"name":"item10"}]'
  );
});

test("Testing Array of trees as input", () => {
  expect(
    JSON.stringify(
      flattenTree(
        [
          {
            name: "item1",
            children: [
              {
                name: "item2",
                children: [
                  {
                    name: "item3",
                  },
                  {
                    name: "item4",
                    children: [
                      {
                        name: "item5",
                      },
                      {
                        name: "item6",
                      },
                    ],
                  },
                  {
                    name: "item7",
                  },
                ],
              },
              {
                name: "item8",
                children: [
                  {
                    name: "item9",
                  },
                  {
                    name: "item10",
                  },
                ],
              },
            ],
          },
          {
            name: "item11",
            children: [
              {
                name: "item12",
                children: [
                  {
                    name: "item13",
                  },
                  {
                    name: "item14",
                    children: [
                      {
                        name: "item15",
                      },
                      {
                        name: "item16",
                      },
                    ],
                  },
                  {
                    name: "item17",
                  },
                ],
              },
              {
                name: "item18",
                children: [
                  {
                    name: "item19",
                  },
                  {
                    name: "item20",
                  },
                ],
              },
            ],
          },
        ],
        ["children"]
      )
    )
  ).toBe(
    '[{"name":"item1"},{"name":"item2"},{"name":"item3"},{"name":"item4"},{"name":"item5"},{"name":"item6"},{"name":"item7"},{"name":"item8"},{"name":"item9"},{"name":"item10"},{"name":"item11"},{"name":"item12"},{"name":"item13"},{"name":"item14"},{"name":"item15"},{"name":"item16"},{"name":"item17"},{"name":"item18"},{"name":"item19"},{"name":"item20"}]'
  );
});
