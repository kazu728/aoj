export type InputType = [number, number[]][];

let n: number;
let A: number[];

let answer: number[] = [];

const solve = (i: number, m: number): boolean => {
  if (m === 0) return true;
  if (i >= n) return false;

  const r = solve(i + 1, m) || solve(i + 1, m - A[i]);
  return r;
};

export default function search(input: InputType) {
  [n, A] = input.filter((_, i) => !i)[0];

  const [q, m] = input.filter((_, i) => i)[0];

  for (let i = 0; i < q; i++) {
    if (!solve(0, m[i])) continue;
    answer.push(m[i]);
  }
  return answer;
}
