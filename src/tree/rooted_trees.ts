class Node {
  constructor(
    private _node: number,
    private _degree: number,
    private _parentNode: number,
    private _childNodes: number[]
  ) {}

  public get node(): number {
    return this._node
  }

  public get degree(): number {
    return this._degree
  }

  public get parentNode(): number {
    return this._parentNode
  }

  public get childNodes(): number[] {
    return this._childNodes
  }
}

let nodeList: number[][]

const nodeWalking = (arrayedNode: number[], parentNode: number) => {
  const number = arrayedNode[0]
  const degree = arrayedNode[1]
  const childNodes = arrayedNode.slice(2, arrayedNode.length)

  const node = new Node(number, degree, parentNode, childNodes)

  const template = `node ${number}: parent = ${node.parentNode}`
  if (!node.degree) {
    console.log(`${template}, leaf, ${node.childNodes}`)
  } else {
    console.log(`${template}, intenal node, ${node.childNodes}  `)
    for (let i = 0; i < node.childNodes.length; i++) {
      nodeWalking(nodeList[node.childNodes[i]], number)
    }
  }
}

export const main = (input: string) => {
  const arrayedInput = input.split(/\n/)
  nodeList = arrayedInput
    .filter((_node, index) => index)
    .map((a) => a.split(' ').map((b) => parseInt(b)))

  nodeWalking(nodeList[0], -1)
}
