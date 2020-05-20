class Node {
  constructor(
    public node: number,
    public key: number,
    public left: number,
    public right: number,
    public parent?: number
  ) {}
}

export const main = (input: [number, number[]]) => {
  const nodeList: Node[] = []

  const [length, elements] = input

  for (let i = 1; i < length + 1; i++) {
    const parent = elements[Math.floor(i / 2) - 1]
    const left = elements[i * 2 - 1]
    const right = elements[i * 2]

    nodeList.push(
      new Node(i, elements[i - 1], left, right, parent || undefined)
    )
  }

  console.log(nodeList)
}
