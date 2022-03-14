import { assertEquals } from "../deps.ts";
import { Input, main } from "./matrix.ts";

Deno.test("Matrix", () => {
  const input: Input = [4, [1, 2, 2, 4], [2, 1, 4], [3, 0], [4, 1, 3]];

  assertEquals(main(input), [
    [0, 1, 0, 1],
    [0, 0, 0, 1],
    [0, 0, 0, 0],
    [0, 0, 1, 0],
  ]);
});
