import { Node } from './node'

const isLeftLeaf = (i: number, nodes: Node[]) => nodes[i].left === -1
const isRightLeaf = (i: number, nodes: Node[]) => nodes[i].right === -1

export const stringToNumberNodeArray = (input: string): number[][] => {
  return input
    .split(/\n/)
    .filter((_node, index) => index)
    .map((a) => a.split(' ').map((b) => parseInt(b)))
}

export const generateNodeArray = (input: string, nodes: Node[]) => {
  stringToNumberNodeArray(input).forEach((node: number[]) => {
    nodes.push(new Node(node[0], node[1], node[2]))
  })
  return nodes
}

export const setParent = (node: Node, i: number, nodes: Node[]): void => {
  if (i === 0) node.setParent(-1)
  if (!isLeftLeaf(i, nodes)) nodes[node.left].setParent(i)
  if (!isRightLeaf(i, nodes)) nodes[node.right].setParent(i)
}
