import { assertEquals } from "../deps.ts";
import { main, Input, Output } from "./breadth_first_search.ts";

Deno.test("BFS", () => {
  const input: Input = [
    [1, 2, 2, 4],
    [2, 1, 4],
    [3, 0],
    [4, 1, 3],
  ];

  const ouput: Output = [
    [1, 0],
    [2, 1],
    [4, 1],
    [3, 2],
  ];

  assertEquals(main(input), ouput);
});
