const MAX_LENGTH = 44;
const memo: number[] = new Array(MAX_LENGTH);

const fib = (i: number): number => {
  if (i <= 1) return 1;

  const a = memo[i - 2];
  const b = memo[i - 1];

  if (a === undefined) {
    memo[i - 2] = fib(i - 2);
  }

  if (b === undefined) {
    memo[i - 1] = fib(i - 1);
  }

  return memo[i - 2] + memo[i - 1];
};

export function main(): number[] {
  for (let i = 0; i < MAX_LENGTH; i++) fib(i);

  return memo;
}
