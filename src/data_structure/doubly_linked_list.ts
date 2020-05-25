import { Node } from './node'

let length = 0
const nodes: Node[] = []

const init = (input: string) => {
  // @ts-ignore
  nodes[0] = new Node(null, null, null)

  const [, ...array] = input.split('\n')
  return array
}

const insert = (operand: number) => {
  const swap = nodes[0].next
  nodes[++length] = new Node(operand, 0, swap)
  nodes[0].setNext(length)
  swap && nodes[swap].setprev(length)
}

const deleteByKey = (operand: number) => {
  nodes.forEach((node: Node, i: number) => {
    if (node.key !== operand) return
    nodes[nodes[i].prev].setNext(nodes[i].next)
  })
}

export const main = (input: string) => {
  init(input).forEach((array: string) => {
    const [order, strOperand] = array.split(' ')
    const operand = parseInt(strOperand)

    order === 'insert' ? insert(operand) : deleteByKey(operand)
  })

  console.log(nodes)

  return nodes
}
