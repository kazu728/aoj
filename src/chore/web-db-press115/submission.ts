// A: 整数を２倍にする
// B: Kを足した値にする

// A or BをN回行う

export const dfs = (remain: number, K: number, current: number): any => {
  if (remain === 0) return current;

  return Math.min(
    dfs(remain - 1, K, current + K),
    dfs(remain - 1, K, 2 * current)
  );
};
