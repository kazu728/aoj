import { assertEquals } from "../deps.ts";
import { InputType } from "./binary_search.ts";
import search from "./binary_search.ts";

Deno.test("Binary search", () => {
  const input: InputType<number> = [
    [5, [1, 2, 3, 4, 5]],
    [3, [3, 4, 1]],
  ];
  assertEquals(search<number>(input), 3);
});

Deno.test("Binary search find nothing", () => {
  const input: InputType<number> = [
    [5, [1, 2, 3, 4, 5]],
    [4, [10, 8, 7]],
  ];
  assertEquals(search<number>(input), 0);
});
