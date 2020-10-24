import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import sort from "./bubble_sort.ts";

Deno.test("Bubble sort sample1", () => {
  const input: [number, number[]] = [5, [5, 3, 2, 4, 1]];

  const [elements, swappedCount] = sort(input);

  assertEquals(elements, [1, 2, 3, 4, 5]);
  assertEquals(swappedCount, 8);
});

Deno.test("Bubble sort sample2", () => {
  const input: [number, number[]] = [6, [5, 2, 4, 6, 1, 3]];

  const [elements, swappedCount] = sort(input);

  assertEquals(elements, [1, 2, 3, 4, 5, 6]);
  assertEquals(swappedCount, 9);
});
