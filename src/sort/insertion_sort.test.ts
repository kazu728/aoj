import {
  generateInputValue,
  generateInputValueBigArray,
  parseInputValue,
  sortByApi
} from "../utility";
import { sort } from "./insertion_sort";

test("should sort", () => {
  const MEMORY_LIMIT = 65536000;
  const input = generateInputValue();
  const array = parseInputValue(input);

  expect(sort(input)).toEqual(sortByApi(array));
  expect(process.memoryUsage().heapUsed).toBeLessThan(MEMORY_LIMIT);
});

test("should sort big array", () => {
  const MEMORY_LIMIT = 65536000;
  const input = generateInputValueBigArray();
  const array = parseInputValue(input);

  expect(sort(input)).toEqual(sortByApi(array));
  expect(process.memoryUsage().heapUsed).toBeLessThan(MEMORY_LIMIT);
});
