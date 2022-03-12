import { assertEquals } from "../deps.ts";
import { main } from "./exhaustive_search.ts";

Deno.test("Exhaustive search", () => {
  const input = [
    [1, 5, 7, 10, 21],
    [2, 4, 17, 8],
  ] as [number[], number[]];

  assertEquals(main(...input), [false, false, true, true]);
});
