class Node {
  constructor(
    private _parent: number,
    private _left: number,
    private _right: number
  ) {}

  get parent() {
    return this._parent
  }

  get left() {
    return this._left
  }

  get right() {
    return this._right
  }

  setParent(parent: number) {
    this._parent = parent
  }
}

const nodeList: Node[] = []
const depth: number[] = []
const height: number[] = []

const setDepth = (u: number, d: number) => {
  if (u === -1) return

  depth[u] = d
  setDepth(nodeList[u].left, d + 1)
  setDepth(nodeList[u].right, d + 1)
}

const setHight = (u: number) => {
  let h1 = 0
  let h2 = 0

  if (nodeList[u] && nodeList[u].left !== -1)
    h1 = setHight(nodeList[u].left) + 1
  if (nodeList[u] && nodeList[u].right !== -1)
    h2 = setHight(nodeList[u].right) + 1

  height[u] = h1 > h2 ? h1 : h2

  return height[u]
}

const print = (n: number) => {
  let deg = 0
  if (nodeList[n].left !== -1) deg++
  if (nodeList[n].right !== -1) deg++

  const template = `node:${n} parent:${nodeList[n].parent} degree:${deg} depth:${depth[n]} height:${height[n]} %s`

  if (nodeList[n].parent === -1) {
    console.log(template, 'root')
  } else if (nodeList[n].left === -1 && nodeList[n].right === -1) {
    console.log(template, 'leaf')
  } else {
    console.log(template, 'intenal node')
  }
}

const generateNodeArray = (input: string): void => {
  input
    .split(/\n/)
    .filter((_node, index) => index)
    .map((a) => a.split(' ').map((b) => parseInt(b)))
    .forEach((node) => nodeList.push(new Node(node[0], node[1], node[2])))
}

export const main = (input: string) => {
  const root = 0
  generateNodeArray(input)
  for (let i = 0; i < nodeList.length; i++) {
    if (i === 0) nodeList[i].setParent(-1)
    if (nodeList[i].left !== -1) nodeList[nodeList[i].left].setParent(i)
    if (nodeList[i].right !== -1) nodeList[nodeList[i].right].setParent(i)
  }

  setDepth(root, 0)
  setHight(0)

  for (let i = 0; i < nodeList.length; i++) {
    print(i)
  }
}
