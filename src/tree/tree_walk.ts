import { Node } from './node/tree_walk'
import { stringToNodeArray } from '../utility'

const nodes: Node[] = []
const preorderList: number[] = []
const inOrderList: number[] = []
const postOrderlist: number[] = []

const isLeftLeaf = (i: number) => nodes[i].left === -1
const isRightLeaf = (i: number) => nodes[i].right === -1

const init = (input: string) => {
  stringToNodeArray(input).forEach((node: number[]) => {
    nodes.push(new Node(node[0], node[1], node[2]))
  })
  return nodes
}

const setParent = (node: Node, i: number): void => {
  if (i === 0) node.setParent(-1)
  if (!isLeftLeaf(i)) nodes[node.left].setParent(i)
  if (!isRightLeaf(i)) nodes[node.right].setParent(i)
}

export const main = (input: string) => {
  init(input).forEach(setParent)
}

export const preorder = (i: number): number[] => {
  if (!nodes[i]) return []
  preorderList.push(i)
  if (!isLeftLeaf(i)) preorder(nodes[i].left)
  if (!isRightLeaf(i)) preorder(nodes[i].right)

  return preorderList
}

export const inOrder = (i: number): number[] => {
  if (!nodes[i]) return []

  if (!isLeftLeaf(i)) inOrder(nodes[i].left)
  inOrderList.push(i)
  if (!isRightLeaf(i)) inOrder(nodes[i].right)

  return inOrderList
}

export const postOrder = (i: number): number[] => {
  if (!nodes[i]) return []

  if (!isLeftLeaf(i)) postOrder(nodes[i].left)

  if (!isRightLeaf(i)) postOrder(nodes[i].right)
  postOrderlist.push(i)

  return postOrderlist
}
