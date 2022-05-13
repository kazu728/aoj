export type Input = number[][];
export type Output = number[];

export function main(input: Input): Output {
  const todo: number[] = [];
  const visited = [0];

  let current = 1;

  while (todo.length !== 0 || visited.length === 1) {
    if (visited.includes(current)) {
      if (todo.pop() == undefined) break;
    }

    const [vertex, edgeNumber, ...edges] = input[current - 1];

    visited.push(vertex);

    for (let i = edgeNumber; 0 <= i; i--) todo.push(edges[i]);

    let next = todo.pop();
    while (next === undefined) {
      next = todo.pop();
    }

    current = next;
  }

  return visited.slice(1, visited.length);
}
