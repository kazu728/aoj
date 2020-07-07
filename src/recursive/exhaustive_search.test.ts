import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { InputType } from "./exhaustive_search.ts";
import search from "./exhaustive_search.ts";

Deno.test("Exhaustive search", () => {
  const input: InputType = [
    [5, [1, 5, 7, 10, 21]],
    [4, [2, 4, 17, 8]],
  ];
  assertEquals(search(input), [17, 8]);
});
