export function main<T>(input: T[]): T[] {
  if (input.length <= 1) return input;

  const m = Math.floor(input.length / 2);
  const [l, r] = [input.slice(0, m), input.slice(m, input.length)];

  return merge(main(l), 0, main(r), 0, []);
}

const merge = <T>(l: T[], i: number, r: T[], j: number, acc: T[]): T[] => {
  const [le, re] = [l[i], r[j]];

  if (le === undefined && re === undefined) return acc;

  if ((le === undefined && re !== undefined) || re < le)
    return merge(l, i, r, j + 1, [...acc, re]);

  if ((le !== undefined && re === undefined) || le <= re)
    return merge(l, i + 1, r, j, [...acc, le]);

  throw new Error("Unexpected");
};
