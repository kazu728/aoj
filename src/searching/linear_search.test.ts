import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { InputType } from "./linear_search.ts";
import search from "./linear_search.ts";

Deno.test("Linear search", () => {
  const input: InputType<number> = [
    [5, [1, 2, 3, 4, 5]],
    [3, [3, 4, 1]],
  ];
  assertEquals(search<number>(input), 3);
});
