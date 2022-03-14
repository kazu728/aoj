export type InputType<T> = [T[], T[]];

const isIncluded = <T>(a: T[], i: number, b: T): boolean => {
  if (a[i] === undefined) return false;
  if (a[i] === b) return true;

  return isIncluded(a, i + 1, b);
};

export function main<T>(input: InputType<T>): number {
  let count = 0;
  const [a, b] = input;

  for (let i = 0; i < b.length; i++) {
    if (isIncluded(a, 0, b[i])) count++;
  }

  return count;
}
