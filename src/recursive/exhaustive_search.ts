const canDivide = (a: number[], n: number, i: number): boolean => {
  if (a.length < i) return false;
  if (n === 0) return true;

  return canDivide(a, n, i + 1) || canDivide(a, n - a[i], i + 1);
};

export const main = (a: number[], b: number[]) =>
  b.map((n) => canDivide(a, n, 0));
