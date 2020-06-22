import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import sort from "./insertion_sort.ts";

Deno.test("insertion sort", () => {
  type inputType = [number, number[]];

  const input: inputType = [6, [5, 2, 4, 6, 1, 3]];

  assertEquals(sort(input), input[1].sort());
});
