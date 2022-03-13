import { assertEquals } from "../deps.ts";
import { main } from "./fibonacci_number.ts";

Deno.test("Fibonacci number", () => {
  const result: number[] = main();

  assertEquals(result[3], 3);
});
