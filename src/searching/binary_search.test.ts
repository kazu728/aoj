import { assertEquals } from "../deps.ts";
import { InputType, main } from "./binary_search.ts";

Deno.test("Binary search", () => {
  const input: InputType<number> = [
    [1, 2, 3, 4, 5],
    [3, 4, 1],
  ];
  assertEquals(main<number>(input), 3);
});

Deno.test("Binary search nothing found", () => {
  const input: InputType<number> = [
    [1, 2, 3, 4, 5],
    [10, 8, 7],
  ];
  assertEquals(main<number>(input), 0);
});
