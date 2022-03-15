import { assertEquals } from "../deps.ts";
import { main, Input, Output } from "./depth_first_search.ts";

Deno.test("DFS stack", () => {
  const input: Input = [
    [1, 2, 2, 3],
    [2, 2, 3, 4],
    [3, 1, 5],
    [4, 1, 6],
    [5, 1, 6],
    [6, 0],
  ];

  const output: Output = [1, 2, 3, 5, 6, 4];
  assertEquals(main(input), output);
});
