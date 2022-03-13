import { assertEquals } from "../deps.ts";
import { main, InputType } from "./stack.ts";

Deno.test("Stack", () => {
  const input: InputType[] = [1, 2, "+", 3, 4, "-", "*"];

  assertEquals(main(input), -3);
});
