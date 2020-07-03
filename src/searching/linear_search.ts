export type InputType<T> = [number, T[]][];

let searchedCount = 0;

export default function search<T>(input: InputType<T>) {
  const [n, S] = input.filter((_, i) => !i)[0];
  const [q, T] = input.filter((_, i) => i)[0];

  for (let i = 0; i < n; i++) {
    // sentinel element
    T[q] = S[i];

    let count = 0;
    while (S[i] !== T[count]) count++;

    if (count !== T.length - 1) searchedCount++;
  }
  return searchedCount;
}
