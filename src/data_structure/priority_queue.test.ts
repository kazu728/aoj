import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import main, { InputType, result } from "./priority_queue.ts";

Deno.test("Priority queue", () => {
  const input: InputType  = [
    ["insert", 8],
    ["insert", 2],
    "extract",
    ["insert", 10],
    "extract",
    ["insert", 11],
    "extract",
    "extract",
    "end",
  ];

  main(input)
  assertEquals(result, [8, 10, 11, 2] );
});
