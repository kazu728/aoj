const INSERT = "insert";
const FIND = "find";

type OPERATION = typeof INSERT | typeof FIND;
export type InputType = [OPERATION, string][];

const MAX_SIZE = 65536;
const GLOBAL_DICTIONARY: string[] = new Array(MAX_SIZE);

const h1 = (n: number): number => n % MAX_SIZE;
const h2 = (n: number, i: number) => i + (n % (MAX_SIZE - 1));

const hash = (n: number, i: number): number => h1(n) + 1 + h2(n, i);

const genIndex = (s: string): number =>
  Number(
    s
      .split("")
      .map((t) => t.charCodeAt(0))
      .join("")
  );

const find = (s: string, i: number): boolean => {
  let index = hash(genIndex(s), i);

  if (GLOBAL_DICTIONARY[index] === s) return true;

  while (GLOBAL_DICTIONARY[index] !== s) {
    if (GLOBAL_DICTIONARY[index] === undefined) return false;

    index = hash(genIndex(s), i + 1);
  }
  return true;
};

const insert = (s: string, i: number): void => {
  let index = hash(genIndex(s), i);

  while (GLOBAL_DICTIONARY[index] !== undefined) {
    if (GLOBAL_DICTIONARY[index] === s) break;
    index = hash(genIndex(s), i + 1);
  }

  GLOBAL_DICTIONARY[index] = s;
};

export function main(input: InputType): boolean[] {
  const output: boolean[] = [];

  for (const e of input) {
    const [operation, operand] = e;

    switch (operation) {
      case INSERT:
        insert(operand, 0);
        break;
      case FIND:
        output.push(find(operand, 0) ? true : false);
        break;
    }
  }

  return output;
}
