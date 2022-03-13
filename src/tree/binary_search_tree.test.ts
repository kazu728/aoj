import { assertEquals } from "../deps.ts";
import { InputType, OmitInput } from "./binary_search_tree.ts";
import { main } from "./binary_search_tree.ts";

Deno.test("binary search tree insert", () => {
  const input: InputType = [
    8,
    ["insert", 30],
    ["insert", 88],
    ["insert", 12],
    ["insert", 1],
    ["insert", 20],
    ["insert", 17],
    ["insert", 25],
    "print",
  ];
  const omitInput = input.filter((e, i) => i !== 0) as OmitInput;

  const [preorderlist, inorderlist] = main(omitInput);

  assertEquals(preorderlist, [30, 12, 1, 20, 17, 25, 88]);
  assertEquals(inorderlist, [1, 12, 17, 20, 25, 30, 88]);
});

Deno.test("binary search tree find", () => {
  const input: InputType = [
    10,
    ["insert", 30],
    ["insert", 88],
    ["insert", 12],
    ["insert", 1],
    ["insert", 20],
    ["find", 12],
    ["insert", 17],
    ["insert", 25],
    ["find", 16],
    "print",
  ];

  const omitInput = input.filter((e, i) => i !== 0) as OmitInput;

  const [preorderlist, inorderlist] = main(omitInput);

  assertEquals(preorderlist, [30, 12, 1, 20, 17, 25, 88]);
  assertEquals(inorderlist, [1, 12, 17, 20, 25, 30, 88]);
});

Deno.test("binary search tree delete", () => {
  const input: InputType = [
    18,
    ["insert", 8],
    ["insert", 2],
    ["insert", 3],
    ["insert", 7],
    ["insert", 22],
    ["insert", 1],
    ["find", 1],
    ["find", 2],
    ["find", 3],
    ["find", 4],
    ["find", 5],
    ["find", 6],
    ["find", 7],
    ["find", 8],
    ["delete", 7],
    ["delete", 8],

    "print",
  ];

  const omitInput = input.filter((e, i) => i !== 0) as OmitInput;
  const [preorderList, inorderList] = main(omitInput);

  assertEquals(inorderList, [1, 2, 22]);
  assertEquals(preorderList, [2, 1, 22]);
});
