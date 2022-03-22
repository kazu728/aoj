import { assertEquals } from "../deps.ts";
import { mergeSort } from "./merge_sort.ts";

Deno.test("Merge sort", () => {
  const input = [9, 6, 1, 4, 3, 5, 2, 7, 8];
  const output = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  assertEquals(mergeSort(input), output);
});
