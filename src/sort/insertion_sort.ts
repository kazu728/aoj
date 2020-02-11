import { generateInputArray } from "../utility";

export const sort = (input: string) => {
  const [length, array] = generateInputArray(input)

  for (let i = 0; i < length; i++) {
    let v = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > v) {
      array[j + 1] = array[j];
      j--;
      array[j + 1] = v;
      console.log(array);
    }
  }
  return array;
};
