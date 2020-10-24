import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { isFound, InputType } from "./binary_search_tree.ts";
import main, { init } from "./binary_search_tree.ts";

Deno.test("binary search tree insert", () => {
  const input: InputType<number>[] = [
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
  init();
  const [inorderList, preorderList] = main(input);

  assertEquals(inorderList, [1, 12, 17, 20, 25, 30, 88]);
  assertEquals(preorderList, [30, 12, 1, 20, 17, 25, 88]);
});

Deno.test("binary search tree find", () => {
  const input: InputType<number>[] = [
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

  init();
  const [inorderList, preorderList] = main(input);

  assertEquals(inorderList, [1, 12, 17, 20, 25, 30, 88]);
  assertEquals(preorderList, [30, 12, 1, 20, 17, 25, 88]);
  assertEquals(isFound, ["yes", "no"]);
});

// Deno.test("binary search tree delete", () => {
//   const input: InputType<number>[] = [
//     18,
//     ["insert", 8],
//     ["insert", 2],
//     ["insert", 3],
//     ["insert", 7],
//     ["insert", 22],
//     ["insert", 1],
//     ["find", 1],
//     ["find", 2],
//     ["find", 3],
//     ["find", 4],
//     ["find", 5],
//     ["find", 6],
//     ["find", 7],
//     ["find", 8],
//     "print",
//     ["delete", 3],
//     ["delete", 7],
//     "print",
//   ];

//   init();
//   const [inorderList, preorderList] = main(input);

// assertEquals(inorderList, [1, 12, 17, 20, 25, 30, 88]);
// assertEquals(preorderList, [30, 12, 1, 20, 17, 25, 88]);
// assertEquals(findAnswer, ["yes", "no"]);
// });
