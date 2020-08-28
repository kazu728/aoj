import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import init, { inorder, postOrder, preorder } from "./tree_walk.ts";

Deno.test("tree walk", () => {
  type InputType<T> = [number, ...[...T[]][]];

  const input: InputType<number> = [
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

  init(input);

  assertEquals(preorder(0), [0, 1, 2, 3, 4, 5, 6, 7, 8]);
  assertEquals(inorder(0), [2, 1, 3, 0, 6, 5, 7, 4, 8]);
  assertEquals(postOrder(0), [2, 3, 1, 6, 7, 5, 8, 4, 0]);
});
