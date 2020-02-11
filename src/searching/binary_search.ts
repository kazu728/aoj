import { splitLengthWithArray } from "../utility";

const search = (n: number, S: number[], key: number): boolean => {
  let left = 0;
  let right = n;

  console.log(n, S, key);

  while (left < right) {
    let mid = (left + right) / 2;
    if (S[mid] === key) return true;
    if (key < S[mid]) {
      // right = 10
      right = mid;
    }
    if (S[mid] < key) {
      left = mid + 1;
    }
  }

  return false;
};

export const main = (input: string) => {

  let sum = 0;
  const [n, S, q, T] = splitLengthWithArray(input);

  for (let i = 0; i < q; i++) {
    if (search(n, S, T[i])) sum++;
  }

  console.log(sum);
};
