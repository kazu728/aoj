import { generateInputArray } from "../utility";

export const sort = (input: string) => {
  const [arrayLength, array] = generateInputArray(input)

  console.time("bubble_sort");
  let count = 0;

  for (let i = 0; i < arrayLength; i++) {
    for (let j = 0; j < arrayLength; j++) {
      let value;

      if (array[j + 1] < array[j]) {
        value = array[j];
        array[j] = array[j + 1];
        array[j + 1] = value;

        count += 1;
      }
    }
  }
  console.log(`${array.join(" ")}\n${count}`);
  console.timeEnd("bubble_sort");

  return array;
};
