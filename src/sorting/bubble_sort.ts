export default function sort<T extends [number, any[]]>(
  input: T
): [T[1], number] {
  const [length, elements] = input;

  let swappedCount = 0;
  let swap: T;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i; j++) {
      if (elements[j] > elements[j + 1]) {
        swap = elements[j];
        elements[j] = elements[j + 1];
        elements[j + 1] = swap;

        swappedCount++;
      }
    }
  }

  return [elements, swappedCount];
}
