import { BinarySearchTreeNode } from './node/binary_search_tree'

let root: BinarySearchTreeNode
export const preorderList: number[] = []
export const inorderList: number[] = []
export const answerListIfItsExist: string[] = []

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

const find = (operand: number) => {
  let currentNode: BinarySearchTreeNode | null = root
  let existsOperand = false

  while (currentNode) {
    if (operand === currentNode.key) {
      existsOperand = true
      break
    }
    currentNode =
      currentNode.key < operand ? currentNode.right : currentNode.left
  }
  answerListIfItsExist.push(existsOperand ? 'yes' : 'no')
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
    opecode === 'insert'
      ? insert(parseInt(operand))
      : opecode === 'find'
      ? find(parseInt(operand))
      : push()
  })

  return root
}
