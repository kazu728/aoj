export type Input = [number, ...number[][]];
export type Output = number[][];

export function main(input: Input): Output {
  const length = input[0];

  const matrix: number[][] = new Array(length);
  for (let i = 0; i < length; i++) matrix[i] = new Array(length).fill(0);

  const list = input.filter((_, i): _ is number[] => i !== 0);

  for (const l of list) {
    const [vertex, , ...edges] = l;

    for (const e of edges) matrix[vertex - 1][e - 1] = 1;
  }

  return matrix;
}
