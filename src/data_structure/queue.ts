export type InputType = [[number, number], ...[string, number][]];
export type OmitInput = [string, number][];
export type Output = [string, number][];

const MAX_LENGTH = 65536;

export function main(quantum: number, input: OmitInput): Output {
  const output: Output = [];

  const queue: [string, number][] = input;

  let turnAroundTime = 0;
  let head = 0;
  let tail = input.length;

  while (head !== tail) {
    const [key, value] = queue[head];

    if (value - quantum === 0) {
      turnAroundTime += quantum;
      output.push([key, turnAroundTime]);
    } else if (value - quantum < 0) {
      turnAroundTime += value;
      output.push([key, turnAroundTime]);
    } else {
      const rest = value - quantum;
      queue[tail] = [key, rest];
      turnAroundTime += quantum;

      tail = tail + 1 === MAX_LENGTH ? 0 : tail + 1;
    }

    head = head + 1 === MAX_LENGTH ? 0 : head + 1;
  }

  return output;
}
