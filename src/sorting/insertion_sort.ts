import { inputElement } from "./sort.d.ts";

export default function sort<T extends [number, inputElement[]]>(
  input: T
): inputElement[] {
  const [length, elements] = input;

  for (let i = 0; i < length; i++) {
    let swap = elements[i];
    let j = i - 1;

    while (j >= 0 && elements[j] > swap) {
      elements[j + 1] = elements[j];
      j--;
    }
    elements[j + 1] = swap;
  }

  return elements;
}
