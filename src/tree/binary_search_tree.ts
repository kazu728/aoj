import { BinarySearchTreeNode } from './node/binary_search_tree'

let root: BinarySearchTreeNode
export const preorderList: number[] = []
export const inorderList: number[] = []
export const answerList: string[] = []

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

  while (currentNode) {
    if (operand === currentNode.key) break

    currentNode =
      currentNode.key < operand ? currentNode.right : currentNode.left
  }
  currentNode ? answerList.push('yes') : answerList.push('no')
  return currentNode
}

const treeMinimum = (node: BinarySearchTreeNode): BinarySearchTreeNode => {
  while (node.left) {
    node = node.left
  }
  return node
}

const treeSuccessor = (node: BinarySearchTreeNode) => {
  if (node.right) return treeMinimum(node.right)
  let parentNode = node.parent

  while (parentNode && node === parentNode.right) {
    node = parentNode
    parentNode = parentNode.parent
  }

  return parentNode
}

const deleteByOperand = (node: BinarySearchTreeNode) => {
  let deleteTargetNode: BinarySearchTreeNode = node
  let childNode: BinarySearchTreeNode

  deleteTargetNode = !node.left || !node.right ? node : treeSuccessor(node)

  childNode = deleteTargetNode.left
    ? deleteTargetNode.left
    : (childNode = deleteTargetNode.right)

  if (childNode) childNode.parent = deleteTargetNode.parent

  if (deleteTargetNode !== node) {
    node.key = deleteTargetNode.key
  }
  if (!deleteTargetNode.parent) return

  if (deleteTargetNode === deleteTargetNode.parent.left) {
    deleteTargetNode.parent.left = childNode
  }

  if (deleteTargetNode === deleteTargetNode.parent.right) {
    deleteTargetNode.parent.right = childNode
  }
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
    const [opecode, strOperand] = instruction.split(' ')
    const operand = parseInt(strOperand)

    opecode === 'insert'
      ? insert(operand)
      : opecode === 'find'
      ? find(operand)
      : opecode === 'delete'
      ? deleteByOperand(find(operand))
      : push()
  })

  return root
}
