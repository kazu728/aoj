import { assertEquals } from "../deps.ts";
import { InputType, main } from "./dictionary.ts";

Deno.test("Dictionary", () => {
  const input: InputType = [
    ["insert", "AAA"],
    ["insert", "AAC"],
    ["find", "AAA"],
    ["find", "CCC"],
    ["insert", "CCC"],
    ["find", "CCC"],
    ["insert", "AAA"],
    ["insert", "AAA"],
  ];

  assertEquals(main(input), [true, false, true]);
});
