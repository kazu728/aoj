import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import main, { InputType } from "./stack.ts";

Deno.test("Stack", () => {
  const input: InputType = [1, 2, "+", 3, 4, "-", "*"];
  assertEquals(main(input), -3);
});
