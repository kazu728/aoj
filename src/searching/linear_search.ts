import { splitLengthWithArray } from "../utility";

const search = (A: number[], n: number, key: number): boolean => {
  let i = 0;
  A[n] = key;

  while (A[i] != key) i++;
  return i != n;
};

export const main = (input: string) => {
  const [n, A, q, key] = splitLengthWithArray(input);

  let a = 0;
  for (let i = 0; i < q; i++) {
    search(A, n, key[i]) && a++;
  }
  console.log(a);
  return a;
};
