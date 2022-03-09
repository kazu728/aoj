import { assertEquals } from "../deps.ts";
import main, { Operand } from "./stack.ts";

Deno.test("Stack", () => {
  const input: (Operand | number)[] = [1, 2, "+", 3, 4, "-", "*"];

  main(input);

  assertEquals(main(input), -3);
});
