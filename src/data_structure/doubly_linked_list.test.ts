import { assertEquals } from "../deps.ts";
import { InputType } from "./doubly_linked_list.ts";

import main from "./doubly_linked_list.ts";

Deno.test("Doubly linked list", () => {
  const input: InputType = [
    7,
    ["insert", 5],
    ["insert", 2],
    ["insert", 3],
    ["insert", 1],
    ["delete", 3],
    ["insert", 6],
    ["delete", 5],
  ];

  assertEquals(main(input), [6, 1, 2]);
});
