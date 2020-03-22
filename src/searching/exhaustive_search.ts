import { splitLengthWithArray } from '../utility';

let n: number;
let A: number[];

const solve = (i: number, m: number) => {
  if (m === 0) return 1;
  if (i >= n) return 0;

  const res: any = solve(i + 1, m) || solve(i + 1, m - A[i]);
  return res;
};

export const main = (input: string) => {
  const [l, a, q, m] = splitLengthWithArray(input);
  [n, A] = [l, a];
  for (let i = 0; i < q; i++) {
    solve(0, m[i]) ? console.log('yes\n') : console.log('no\n');
  }
};
