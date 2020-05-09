class BinarySearchTreeNode {
  constructor(
    public key: number,
    public left: BinarySearchTreeNode,
    public right: BinarySearchTreeNode,
    public parent: BinarySearchTreeNode
  ) {}
}

let root: BinarySearchTreeNode
const preorderList: number[] = []
const inorderList: number[] = []

export const getPreorderList = () => preorderList
export const getInorderList = () => inorderList

const insert = (operand: number) => {
  let parentNode
  let currentNode: BinarySearchTreeNode = root
  const insertedNode = new BinarySearchTreeNode(
    operand,
    // @ts-ignore
    undefined,
    undefined,
    undefined
  )

  while (currentNode) {
    parentNode = currentNode
    currentNode =
      insertedNode.key < currentNode.key ? currentNode.left : currentNode.right
  }

  if (parentNode) insertedNode.parent = parentNode

  if (!parentNode) {
    root = insertedNode
    return
  }

  insertedNode.key < parentNode.key
    ? (parentNode.left = insertedNode)
    : (parentNode.right = insertedNode)
}

const preorder = (node: BinarySearchTreeNode) => {
  if (!node) return
  preorderList.push(node.key)
  preorder(node.left)
  preorder(node.right)
}

const inorder = (node: BinarySearchTreeNode) => {
  if (!node) return

  inorder(node.left)
  inorderList.push(node.key)
  inorder(node.right)
}

const push = () => {
  preorder(root)
  inorder(root)
}

export const main = (input: string) => {
  const instructions = input.split('\n').filter((_a, index) => index)

  instructions.forEach((instruction: string) => {
    const [opecode, operand] = instruction.split(' ')
    opecode === 'insert' ? insert(parseInt(operand)) : push()
  })

  return root
}
