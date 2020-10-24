import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { InputType } from "./dictionary.ts";

import main from "./dictionary.ts";

Deno.test("Dictionary", () => {
  const input: InputType = [
    6,
    ["insert", "AAA"],
    ["insert", "AAC"],
    ["find", "AAA"],
    ["find", "CCC"],
    ["insert", "CCC"],
    ["find", "CCC"],
    ["insert", "AAA"],
    ["insert", "AAA"],
  ];

  assertEquals(main(input), ["yes", "no", "yes"]);
});
