export const sort = (input: string) => {
  const inputSplitted: string[] = input.split(/\n/);

  const arrayLength: number = parseInt(inputSplitted[0]);
  const array = inputSplitted[1].split(" ").map(e => parseInt(e));

  console.time("insertion_sort");
  for (let i = 0; i < arrayLength; i++) {
    // current value
    let v = array[i];
    // prev index
    let j = i - 1;

    while (j >= 0 && array[j] > v) {
      array[j + 1] = array[j];
      j--;
      array[j + 1] = v;
      console.log(array);
    }
  }
  console.timeEnd("insertion_sort");
  return array;
};
