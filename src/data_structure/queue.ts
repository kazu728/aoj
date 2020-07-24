export type InputType = [[number, number], ...[string, number][]];

let queue: [string, number][];
let head = 0;
let tail = 0;

const initQueue = (input: InputType) => {
  queue = input.filter((e, i): e is [string, number] => i !== 0);
  tail = queue.length - 1;
};

const takeQuantum = (input: InputType) =>
  input.filter((e, i): e is [number, number] => !i)[0];

const dequeue = () => {
  head++;
};

const enqueue = (result: [string, number]) => {
  queue[++tail] = result;
  head++;
};

export default function main(input: InputType) {
  const results = [];
  const [_, quantum] = takeQuantum(input);
  initQueue(input);

  let turnAroundTime = 0;

  while (queue[head]) {
    const [process, remainingTime] = queue[head];
    const result = remainingTime - quantum;

    if (result <= 0) {
      turnAroundTime = turnAroundTime + remainingTime;
      results.push([process, turnAroundTime]);
      dequeue();
    }

    if (result > 0) {
      turnAroundTime += 100;
      enqueue([process, result]);
    }
  }

  return results;
}
