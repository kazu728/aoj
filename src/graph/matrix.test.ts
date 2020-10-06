import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import createMatrix, { InputType } from "./matrix.ts";

Deno.test("Matrix", () => {
  const input: InputType = [4, [1, 2, 2, 4], [2, 1, 4], [3, 0], [4, 1, 3]];

  // assertEquals(createMatrix(input), [
  //   [0, 1, 0, 1],
  //   [0, 0, 0, 1],
  //   [0, 0, 0, 0],
  //   [0, 0, 1, 0],
  // ]);
  console.log(createMatrix(input));
});
