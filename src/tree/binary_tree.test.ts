import main from "./binary_tree.ts";

Deno.test("binary tree", () => {
  type InputType<T> = [number, ...[...T[]][]];

  const input: InputType<number> = [
    9,
    [0, 1, 4],
    [1, 2, 3],
    [2, -1, -1],
    [3, -1, -1],
    [4, 5, 8],
    [5, 6, 7],
    [6, -1, -1],
    [7, -1, -1],
    [8, -1, -1],
  ];

  main(input);
});
