const dp: number[] = []

const fib = (n: number): number => {
  if (n <= 1) {
    dp[n] = 1
    return dp[n]
  }

  if (dp[n]) return dp[n]

  dp[n] = fib(n - 1) + fib(n - 2)
  return dp[n]
}

export default function main() {
  const fibonacciSequence = []

  for (let i = 0; i <= 10; i++) {
    fibonacciSequence.push(fib(i))
  }

  return fibonacciSequence
}
