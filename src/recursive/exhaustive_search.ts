const go = (a: number[], m: number, i: number): boolean => {
  if (m === 0) return true;
  if (a.length < i) return false;

  return go(a, m, i + 1) || go(a, m - a[i], i + 1);
};

export function main(a: number[], b: number[]): boolean[] {
  const l: boolean[] = [];

  for (const m of b) {
    const canCreate = go(a, m, 0);
    l.push(canCreate);
  }

  return l;
}
