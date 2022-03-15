export type Input = number[][];
export type Output = number[];

export function main(input: Input): Output {
  const todo: number[] = [];
  const seen: number[] = [];

  const [vertex, n, ..._] = input[0];
  todo.push(vertex);
  seen.push(vertex);

  while (todo.length !== 0 || seen.length === 0) {
    const node = todo.pop();
    if (node === undefined) break;
    const [_, n, ...edges] = input[node - 1];

    for (const edge of edges) {
      if (seen.includes(edge)) continue;
      todo.push(edge);
      seen.push(edge);
    }
  }

  return seen;
}
