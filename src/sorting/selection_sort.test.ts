import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import sort from "./selection_sort.ts";

Deno.test("insertion sort", () => {
  const input: [number, number[]] = [6, [5, 6, 4, 2, 1, 3]];
  const output = [1, 2, 3, 4, 5, 6];
  assertEquals(sort(input)[0], output);
  assertEquals(sort(input)[1], 5);
});
