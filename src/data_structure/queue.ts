type JobType = { [key: string]: number };

let head = 0;
let tail = 0;
let queue: JobType[];
let time = 0;
let remainder;

const enqueue = (a: JobType) => {
  if (isFull()) throw new Error('overflow');
  queue[tail] = a;
  tail++;
};

const dequeue = (): JobType => {
  if (isEmpty()) throw new Error('underflow');
  head++;
  return queue[head - 1];
};

const isEmpty = () => head === tail;
const isFull = () => head === tail + 1;

const toObjectArray = (array: string[]): JobType[] => {
  return array
    .filter((i) => i)
    .map((e) => {
      const [key, value] = e.split(/\s/).map((f, i) => i && parseInt(f, 10));
      return { [key]: value };
    });
};

const initialize = (length: number, array: JobType[]) => {
  queue = new Array(length);

  for (let i = 1; i <= length; i++) {
    enqueue(array[i]);
  }
};

const roundrobin = (quantum: number) => {
  while (head !== tail) {
    const job = dequeue();
    for (const key in job) {
      const calculateResult = job[key] - quantum;

      if (calculateResult > 0) {
        enqueue({ [key]: calculateResult });
        time += quantum;
      } else {
        remainder = Math.abs(calculateResult);
        time += quantum - remainder;
      }
    }
  }
};

export const excute = (input: string) => {
  const inputs = input.split('\n');
  const [length, quantum] = inputs[0].split(' ').map((e) => parseInt(e, 10));
  const array = toObjectArray(inputs);

  initialize(length, array);
  roundrobin(quantum);
};
