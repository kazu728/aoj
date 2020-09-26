import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import main, { InputType } from "./maximum_heap.ts";

Deno.test("Maximum heap", () => {
  const input: InputType<number> = [10, [4, 1, 3, 2, 16, 9, 10, 14, 8, 7]];

  assertEquals(main(input), [16, 14, 10, 8, 7, 9, 3, 2, 4, 1]);
});
