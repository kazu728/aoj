import { main, preorder, inOrder, postOrder } from './tree_walk'

const input = `9
0 1 4
1 2 3
2 -1 -1
3 -1 -1
4 5 8
5 6 7
6 -1 -1
7 -1 -1
8 -1 -1`


test('should preorder', () => {
  main(input)
  console.log('preorder', preorder(0).join(' '))

  console.log(process.memoryUsage().heapUsed)
})

test('should inorder', () => {
  main(input)
  console.log('inorder', inOrder(0).join(' '))

  console.log(process.memoryUsage().heapUsed)
})

test('should postorder', () => {
  main(input)
  console.log('postorder', postOrder(0).join(' '))

  console.log(process.memoryUsage().heapUsed)
})
