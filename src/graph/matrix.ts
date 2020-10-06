export type InputType = [number, ...number[][]];

export default function main(input: InputType) {
  const length = input.filter((e, i): e is number => i === 0)[0];
  const vertexs = createVertex(input);

  const matrix: number[][] = initMatrix(length);

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      matrix[i][vertexs[i][j] - 1] = 1;
    }
  }

  return matrix;
}

const createVertex = (input: InputType) => {
  return input
    .filter((e, i): e is number[] => i !== 0)
    .map((e) => e.filter((_, i) => i >= 2));
};

const initMatrix = (length: number) =>
  Array.from(new Array(length), () => new Array(length).fill(0));
