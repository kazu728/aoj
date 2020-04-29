import { Node } from './node/binary_tree'

const nodes: Node[] = []
const depth: number[] = []
const height: number[] = []

const isLeftLeaf = (i: number) => nodes[i].left === -1
const isRightLeaf = (i: number) => nodes[i].right === -1
const isRoot = (i: number) => nodes[i].parent === -1

const setDepth = (u: number, d: number) => {
  if (u === -1) return

  depth[u] = d
  setDepth(nodes[u].left, d + 1)
  setDepth(nodes[u].right, d + 1)
}

const setHight = (u: number) => {
  let h1 = 0
  let h2 = 0

  if (nodes[u] && !isLeftLeaf(u)) h1 = setHight(nodes[u].left) + 1
  if (nodes[u] && !isRightLeaf(u)) h2 = setHight(nodes[u].right) + 1

  height[u] = h1 > h2 ? h1 : h2

  return height[u]
}

const print = (n: number) => {
  let deg = 0
  if (!isLeftLeaf(n)) deg++
  if (!isRightLeaf(n)) deg++

  const template = `node:${n} parent:${nodes[n].parent} degree:${deg} depth:${depth[n]} height:${height[n]} %s`
  const output = (position: string) => console.log(template, position)

  isRoot(n)
    ? output('root')
    : isLeftLeaf(n) && isRightLeaf(n)
    ? output('leaf')
    : output('intenal node')
}

const generateNodeArray = (input: string): void => {
  input
    .split(/\n/)
    .filter((_node, index) => index)
    .map((a) => a.split(' ').map((b) => parseInt(b)))
    .forEach((node) => nodes.push(new Node(node[0], node[1], node[2])))
}

export const main = (input: string) => {
  const root = 0
  generateNodeArray(input)
  for (let i = 0; i < nodes.length; i++) {
    if (i === 0) nodes[i].setParent(-1)
    if (!isLeftLeaf(i)) nodes[nodes[i].left].setParent(i)
    if (!isRightLeaf(i)) nodes[nodes[i].right].setParent(i)
  }

  setDepth(root, 0)
  setHight(0)

  for (let i = 0; i < nodes.length; i++) {
    print(i)
  }
}
