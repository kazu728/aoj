import {
  generateInputValue,
  generateInputValueBigArray,
  parseInputValue,
  sortByApi
} from "../utility";
import { sort } from "./bubble_sort";

test("should sort", () => {
  const MEMORY_LIMIT = 65536000;
  const input = generateInputValue();
  const array = parseInputValue(input);

  expect(sortByApi(array)).toEqual(sort(input));
  expect(process.memoryUsage().heapUsed).toBeLessThan(MEMORY_LIMIT);
});

test("should sort big array", () => {
  const MEMORY_LIMIT = 65536000;
  const input = generateInputValueBigArray();
  const array = parseInputValue(input);

  expect(sortByApi(array)).toEqual(sort(input));
  expect(process.memoryUsage().heapUsed).toBeLessThan(MEMORY_LIMIT);
});
