export type InputType = [[number, number], ...[string, number][]];

let queue: [string, number][];
let head = 0;
let tail = 0;

export default function main(input: InputType) {
  const results = [];
  initQueue(input);

  let turnAroundTime = 0;

  while (queue[head]) {
    const [process, remainingTime] = queue[head];
    const result = remainingTime - quantum(input);

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

const initQueue = (input: InputType): void => {
  queue = input.filter((e, i): e is [string, number] => i !== 0);
  tail = queue.length - 1;
};

const quantum = (input: InputType): number =>
  input.filter((e, i): e is [number, number] => !i)[0][1];

const dequeue = (): number => head++;

const enqueue = (result: [string, number]): void => {
  queue[++tail] = result;
  head++;
};
