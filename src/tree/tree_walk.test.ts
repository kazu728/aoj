import { assertEquals } from "../deps.ts";
import { inorder, postorder, preorder } from "./tree_walk.ts";
import { genNodeTree, Node } from "./utility.ts";

type InputType = [number, ...[...number[]][]];

const input: InputType = [
  9,
  [0, 1, 4],
  [1, 2, 3],
  [2, -1, -1],
  [3, -1, -1],
  [4, 5, 8],
  [5, 6, 7],
  [6, -1, -1],
  [7, -1, -1],
  [8, -1, -1],
];
const omitInput = input.filter((e, i): e is number[] => i !== 0);
const [node, left, right] = omitInput[0];
const treeNode = genNodeTree(omitInput, node, undefined, left, right) as Node;

Deno.test("preorder", () => {
  assertEquals(preorder(treeNode, []), [0, 1, 2, 3, 4, 5, 6, 7, 8]);
});

Deno.test("inorer", () => {
  assertEquals(inorder(treeNode, []), [2, 1, 3, 0, 6, 5, 7, 4, 8]);
});

Deno.test("postorder", () => {
  assertEquals(postorder(treeNode, []), [2, 3, 1, 6, 7, 5, 8, 4, 0]);
});
