export type InputType<T> = [number, ...[T[]]];

export default function main<T>(input: InputType<T>) {
  const [_, elements] = input;

  // Add sentinel node
  const E = [0, ...elements];

  const maxHeapify = (i: number) => {
    let largest;
    const l = 2 * i;
    const r = 2 * i + 1;

    if (E[l] > E[i]) {
      largest = l;
    } else {
      largest = i;
    }

    if (E[r] > E[largest]) largest = r;

    if (largest != i) {
      let swap = E[largest];
      E[largest] = E[i];
      E[i] = swap;
      maxHeapify(largest);
    }
  };

  for (let i = 5; i > 0; i--) maxHeapify(i);

  // return Elements removed sentinel node
  return E.slice(1);
}
