const MAX_LENGTH = 44;
const memo: number[] = new Array(MAX_LENGTH);

export default function main() {
  const fib = (n: number): number => {
    if (n <= 1) {
      memo[n] = 1;
      return 1;
    }

    const val = memo[n] ? memo[n] : fib(n - 1) + fib(n - 2);
    memo[n] = val;
    return val;
  };

  for (let i = 0; i < MAX_LENGTH; i++) fib(i);

  return memo;
}
