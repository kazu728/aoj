import {
  generateInputValue,
  generateInputValueBigArray,
  parseInputValue,
  sortByApi
} from "../utility";
import { sort } from "./insertion_sort";

test("should sort", () => {
  const input = generateInputValue();
  const array = parseInputValue(input);

  expect(sortByApi(array)).toEqual(sort(input));
});

test("should sort big array", () => {
  const input = generateInputValueBigArray();
  const array = parseInputValue(input);

  expect(sortByApi(array)).toEqual(sort(input));
});
