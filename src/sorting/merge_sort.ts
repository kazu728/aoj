const merge = <T>(l: T[], i: number, r: T[], j: number, output: T[]): T[] => {
  if (i === l.length && j === r.length) return output;

  if (i < l.length && j < r.length) {
    return l[i] <= r[j]
      ? merge(l, i + 1, r, j, [...output, l[i]])
      : merge(l, i, r, j + 1, [...output, r[j]]);
  }

  if (i < l.length) return merge(l, i + 1, r, j, [...output, l[i]]);
  return merge(l, i, r, j + 1, [...output, r[j]]);
};

export function mergeSort<T>(input: T[]): T[] {
  if (input.length <= 1) return input;

  const middle = Math.floor(input.length / 2);
  const [left, right] = [input.slice(0, middle), input.slice(middle)];

  return merge(mergeSort(left), 0, mergeSort(right), 0, []);
}
