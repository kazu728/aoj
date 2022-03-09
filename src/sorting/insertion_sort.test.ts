import { assertEquals } from "../deps.ts";
import sort from "./insertion_sort.ts";

Deno.test("insertion sort", () => {
  type inputType = [number, number[]];

  const input: inputType = [6, [5, 2, 4, 6, 1, 3]];
  const output = [1, 2, 3, 4, 5, 6];
  assertEquals(sort(input), output);
});
