import { assertEquals } from "../deps.ts";
import { InputType } from "./linear_search.ts";
import { main } from "./linear_search.ts";

Deno.test("Linear search", () => {
  const input: InputType<number> = [
    [1, 2, 3, 4, 5],
    [3, 4, 1],
  ];
  assertEquals(main<number>(input), 3);
});
