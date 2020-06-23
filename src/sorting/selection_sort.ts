import { inputElement } from "./sort.d.ts";

export default function sort<T extends [number, number[]]>(
  input: T
): [inputElement[], number] {
  const [length, elements] = input;

  let swap;
  let swappedCount = 0;

  for (let i = 0; i < length - 1; i++) {
    let min = i;

    for (let j = i; j < length; j++) {
      if (elements[min] < elements[j]) continue;
      min = j;
    }

    swap = elements[i];
    elements[i] = elements[min];
    elements[min] = swap;

    swappedCount++;
  }

  return [elements, swappedCount];
}
