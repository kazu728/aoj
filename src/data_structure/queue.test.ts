import { assertEquals } from "../deps.ts";
import { main } from "./queue.ts";

export type Input = [string, number][];
export type Output = [typeof Input[number][0], number][];

export const Input: Input = [
  ["p1", 150],
  ["p2", 80],
  ["p3", 200],
  ["p4", 350],
  ["p5", 20],
];

Deno.test("Queue", () => {
  assertEquals(main(100, Input), [
    ["p2", 180],
    ["p5", 400],
    ["p1", 450],
    ["p3", 550],
    ["p4", 800],
  ]);
});
