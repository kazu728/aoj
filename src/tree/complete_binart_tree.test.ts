import { assertEquals } from "../deps.ts";
import main, { InputType } from "./complete_binart_tree.ts";

Deno.test("complete binary tree", () => {
  const input: InputType<number> = [5, [7, 8, 1, 2, 3]];
  assertEquals(main(input), [
    [1, 7, 8, 1],
    [2, 8, 2, 3, 7],
    [3, 1, 7],
    [4, 2, 8],
    [5, 3, 8],
  ]);
});
