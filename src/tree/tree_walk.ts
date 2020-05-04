import { Node } from './node'
import { generateNodeArray, setParent } from './utility'

const nodes: Node[] = []
const preorderList: number[] = []
const inOrderList: number[] = []
const postOrderlist: number[] = []

const isLeftLeaf = (i: number) => nodes[i].left === -1
const isRightLeaf = (i: number) => nodes[i].right === -1

export const main = (input: string) => {
  generateNodeArray(input, nodes).forEach((node, i) =>
    setParent(node, i, nodes)
  )
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
