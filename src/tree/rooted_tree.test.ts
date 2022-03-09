import { assertEquals } from "../deps.ts";
import { RootedTreeInput, RootedTreeOutput } from "./rooted_tree.ts";
import { main } from "./rooted_tree.ts";

Deno.test("Only root tree", () => {
  const input: RootedTreeInput = [1, [0, 3, 1, 4, 10]];
  const output: RootedTreeOutput[] = [
    {
      node: 0,
      depth: 0,
      parent: -1,
      kind: "root",
      children: [1, 4, 10],
    },
  ];

  assertEquals(main(input), output);
});

Deno.test("rooted tree", () => {
  const input: RootedTreeInput = [
    13,
    [0, 3, 1, 4, 10],
    [1, 2, 2, 3],
    [2, 0],
    [3, 0],
    [4, 3, 5, 6, 7],
    [5, 0],
    [6, 0],
    [7, 2, 8, 9],
    [8, 0],
    [9, 0],
    [10, 2, 11, 12],
    [11, 0],
    [12, 0],
  ];

  const output: RootedTreeOutput[] = [
    { node: 0, parent: -1, depth: 0, kind: "root", children: [1, 4, 10] },
    { node: 1, parent: 0, depth: 1, kind: "internal node", children: [2, 3] },
    { node: 2, parent: 1, depth: 2, kind: "leaf", children: [] },
    { node: 3, parent: 1, depth: 2, kind: "leaf", children: [] },
    {
      node: 4,
      parent: 0,
      depth: 1,
      kind: "internal node",
      children: [5, 6, 7],
    },
    { node: 5, parent: 4, depth: 2, kind: "leaf", children: [] },
    { node: 6, parent: 4, depth: 2, kind: "leaf", children: [] },
    { node: 7, parent: 4, depth: 2, kind: "internal node", children: [8, 9] },
    { node: 8, parent: 7, depth: 3, kind: "leaf", children: [] },
    { node: 9, parent: 7, depth: 3, kind: "leaf", children: [] },
    {
      node: 10,
      parent: 0,
      depth: 1,
      kind: "internal node",
      children: [11, 12],
    },
    { node: 11, parent: 10, depth: 2, kind: "leaf", children: [] },
    { node: 12, parent: 10, depth: 2, kind: "leaf", children: [] },
  ];

  assertEquals(main(input), output);
});
