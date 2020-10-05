export type InputType = (string | [string, number])[];

// Initial heap added sentinel node
const heap = [0];
let heapTail = 0;

export const result: number[] = [];
let resultTail = 0;

const maxHeapify = (i: number) => {
  const p = Math.floor(i / 2);

  const notExistNNodeOrIsRoot = () => !heap[p] || heap[p] > heap[i];
  if (notExistNNodeOrIsRoot()) return;

  const r = p * 2;
  const l = p * 2 + 1;

  let largest = p;

  if (heap[p] < heap[r]) largest = r;
  if (heap[r] < heap[l]) largest = l;

  if (largest === p) return;

  const swap = () => {
    const swap = heap[p];
    heap[p] = heap[largest];
    heap[largest] = swap;
  };

  swap();
  maxHeapify(p);
};

const minimumHeapify = (i: number) => {
  const r = i * 2;
  const l = i * 2 + 1;

  const isLeaf = () => !heap[r] && !heap[l];
  if (isLeaf()) return;

  let smallest = i;

  if (heap[i] > heap[r]) smallest = r;
  if (heap[r] > heap[l]) smallest = l;

  if (smallest === i) return;

  const swap = () => {
    const swap = heap[i];
    heap[i] = heap[smallest];
    heap[smallest] = swap;
  };
  swap();
  minimumHeapify(smallest);
};

export default function main(input: InputType) {
  const insert = (e: number) => {
    heap[++heapTail] = e;
    maxHeapify(heapTail);
  };

  const extract = () => {
    result[resultTail++] = heap[1];
    heap[1] = heap[heapTail--];

    minimumHeapify(1);
  };

  const end = () => result;

  input.forEach((e) => {
    if (Array.isArray(e)) {
      insert(e[1]);
    } else {
      e === "extract" ? extract() : end();
    }
  });
}
