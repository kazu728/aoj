export type Input = number[][];
export type Output = number[][];

type Node = {
  value: number;
  dist: number;
};

class Queue<T> {
  private l: T[] = [];
  constructor(private head: number, private tail: number) {}

  empty(): boolean {
    return this.head === this.tail;
  }

  enqueue(valule: T): void {
    this.l[this.tail] = valule;
    this.tail++;
  }

  dequeue(): T | undefined {
    const value = this.l[this.head];
    this.head++;
    return value;
  }
}

const bfs = (queue: Queue<Node>, target: Input): Output => {
  const output: number[][] = [];

  while (!queue.empty()) {
    const { value, dist } = queue.dequeue()!;

    const visitedNodeValue = output.map((o) => o[0]);

    if (visitedNodeValue.includes(value)) continue;

    output.push([value, dist]);

    const [_, vertexNumber, ...nextVertexes] = target[value];

    for (let i = 0; i < vertexNumber; i++) {
      queue.enqueue({ value: nextVertexes[i], dist: dist + 1 });
    }
  }

  return output;
};

export function main(input: Input): Output {
  const queue = new Queue<Node>(0, 0);
  queue.enqueue({ value: input[0][0], dist: 0 });

  return bfs(queue, [[0, 0], ...input]);
}
