export const sort = (input: string) => {
  const inputSplitted: string[] = input.split(/\n/);

  const arrayLength: number = parseInt(inputSplitted[0]);
  const array = inputSplitted[1].split(" ").map(e => parseInt(e));

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
