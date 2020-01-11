import {
  generateInputValue,
  generateInputValueBigArray,
  splitArrayLengthFromArray,
  sortByApi
} from "../utility";
import { sort } from "./insertion_sort";

test("should sort", () => {
  const input = generateInputValue();
  const array = splitArrayLengthFromArray(input);

  expect(sortByApi(array)).toEqual(sort(input));
});

test("should sort big array", () => {
  const input = generateInputValueBigArray();
  const array = splitArrayLengthFromArray(input);

  expect(sortByApi(array)).toEqual(sort(input));
});
