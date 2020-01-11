const generateRandomNumber = () => Math.floor(Math.random() * Math.floor(10));

const generateInputValueFromLength = (arrayLength: number) => {
  let array: number[] = [];

  for (let i = 0; i < arrayLength; i++) {
    array = [...array, generateRandomNumber()] as number[];
  }

  return `${arrayLength.toString()}\n${array
    .join()
    .replace(/,/g, " ")
    .trim()}`;
};

export const generateInputValue = (): string => {
  const arrayLength = generateRandomNumber();
  return generateInputValueFromLength(arrayLength);
};

export const generateInputValueBigArray = (): string => {
  const arrayLength = 100;
  return generateInputValueFromLength(arrayLength);
};

export const splitArrayLengthFromArray = (input: string): number[] => {
  return input
    .split(/\n/)[1]
    .split(" ")
    .map(e => parseInt(e));
};

export const sortByApi = (array: number[]): number[] => {
  return array.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
};

export const splitInputValue = (input: string) => {
  const splittedValue: string[] = input.split(/\n/);
  return [
    parseInt(splittedValue[0]),
    splittedValue[1].split(" ").map(e => parseInt(e))
  ];
};
