import { main } from "./binary_search";

test("should search", () => {
  const input = `5\n1 2 3 4 5\n3\n3 4 1`;
  expect(3).toEqual(main(input));
});

test("should search big array", () => {
  const input = `10\n1 2 3 4 5 6 7 8 9 10 \n5\n3 4 5 1 9`;
  console.log(input);
  
  expect(5).toEqual(main(input));
});

