type inputElement = string | number;

export default function sort<T extends [number, inputElement[]]>(
  input: T
): [inputElement[], number] {
  const [length, elements] = input;

  let swappedcount: number = 0;
  let swap: inputElement;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i; j++) {
      if (elements[j] > elements[j + 1]) {
        swap = elements[j];
        elements[j] = elements[j + 1];
        elements[j + 1] = swap;

        swappedcount++;
      }
    }
  }

  return [elements, swappedcount];
}
