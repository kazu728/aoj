export type InputType = [number, ...[string, string][]];

const MAX = 1046527;
let dictionary: string[] = new Array(MAX);
const result: string[] = [];

export default function main(input: InputType) {
  const elements = input.filter((e, i): e is [string, string] => i !== 0);

  elements.forEach((element, i) => {
    const [instruction, literal] = element;
    if (instruction === "insert") insert(literal, 1);
    if (instruction === "find") find(literal, 1);
  });

  return result;
}

const insert = (literal: string, i: number) => {
  const key = Number(getKey(literal));

  let h = (h1(key) + i * h2(key)) % MAX;

  while (dictionary[h]) {
    i++;
    h = (h1(key) + i * h2(key)) % MAX;
  }

  dictionary[h] = literal;
};

const find = (literal: string, i: number) => {
  const key = Number(getKey(literal));
  const h = (h1(key) + i * h2(key)) % MAX;

  dictionary[h] === literal ? result.push("yes") : result.push("no");
};

const getKey = (literal: string): string => {
  return literal
    .split("")
    .map((char) => {
      switch (char) {
        case "A":
          return 1;
        case "C":
          return 2;
        case "G":
          return 3;
        case "T":
          return 4;
      }
    })
    .join("");
};

const h1 = (key: number) => key % MAX;
const h2 = (key: number) => 1 + (key % (MAX - 1));
