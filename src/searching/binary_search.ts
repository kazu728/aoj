export type InputType<T> = [T[], T[]];

const binarySearch = <T>(a: T[], l: number, r: number, b: T): boolean => {
  const middle = Math.ceil((l + r) / 2);

  if (a[middle] === b) return true;
  if (middle === 1 || middle === a.length) return false;
  if (a[middle] < b) return binarySearch(a, middle, r, b);

  return binarySearch(a, l, middle, b);
};

export function main<T>(input: InputType<T>): number {
  let count = 0;

  const [a, b] = input;

  const sentinelArrays = [undefined, ...a];

  for (const e of b) {
    if (binarySearch(sentinelArrays, 0, sentinelArrays.length, e)) count++;
  }

  return count;
}
