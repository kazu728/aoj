export type InputType<T> = [number, T[]][];

export default function search<T>(input: InputType<T>) {
  let count = 0;

  const [n, S] = input.filter((_, i) => !i)[0];
  const [q, T] = input.filter((_, i) => i)[0];

  const binary_search = (key: T, begin = 0, end = n - 1): boolean => {
    const middle = Math.floor((begin + end) / 2);

    if (begin === end - 1) {
      if (S[begin] === key) return true;
      if (S[end] === key) return true;

      return false;
    }

    if (S[middle] === key) return true;

    if (S[middle] < key) {
      begin = middle + 1;
    } else {
      end = middle;
    }

    return binary_search(key, begin, end);
  };

  for (let i = 0; i < q; i++) {
    if (binary_search(T[i])) count++;
  }

  return count;
}
