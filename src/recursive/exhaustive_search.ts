export function main(a: number[], b: number[]): boolean[] {
  return b.map((n) => canDivide(n, a, 0));
}

const canDivide = (n: number, a: number[], i: number): boolean => {
  if (n === 0) return true;
  if (a.length < i) return false;

  return canDivide(n, a, i + 1) || canDivide(n - a[i], a, i + 1);
};
