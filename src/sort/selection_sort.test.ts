import {
  generateInputValue,
  generateInputValueBigArray,
  generateInputArray,
  sortByApi
} from "../utility";
import { sort } from "./selection_sort";

const MEMORY_LIMIT = 65536000;

test("should sort", () => {
  const input = generateInputValue();
  const array = generateInputArray(input)[1];

  expect(sort(input)).toEqual(sortByApi(array));
  expect(process.memoryUsage().heapUsed).toBeLessThan(MEMORY_LIMIT);
});

test("should sort big array", () => {
  const input = generateInputValueBigArray();
  const array = generateInputArray(input)[1];

  expect(sort(input)).toEqual(sortByApi(array));
  expect(process.memoryUsage().heapUsed).toBeLessThan(MEMORY_LIMIT);
});
