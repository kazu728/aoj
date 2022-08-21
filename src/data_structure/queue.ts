import { Input, Output } from "./queue.test.ts";

export function main(quantum: number, input: Input): Output {
  const output: Output = [];

  let pastTime = 0;
  let head = 0;
  let tail = input.length;

  while (head !== tail) {
    const [key, remaningTime] = input[head];

    if (quantum < remaningTime) {
      pastTime += quantum;

      const rest = remaningTime - quantum;
      input[tail++] = [key, rest];

      head++;
    }

    if (quantum === remaningTime) {
      pastTime += quantum;
      output.push([key, pastTime]);

      head++;
    }

    if (remaningTime < quantum) {
      pastTime += remaningTime;
      output.push([key, pastTime]);

      head++;
    }
  }

  return output;
}
