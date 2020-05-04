import { MEMORY_LIMIT } from '../constant'
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

describe('display order', () => {
  beforeAll(() => {
    main(input)
  })

  test('should preorder', () => {
    const output = '0 1 2 3 4 5 6 7 8'
    expect(preorder(0).join(' ')).toEqual(output)
    expect(process.memoryUsage().heapUsed).toBeLessThan(MEMORY_LIMIT)
  })

  test('should inorder', () => {
    const output = '2 1 3 0 6 5 7 4 8'
    expect(inOrder(0).join(' ')).toEqual(output)
    expect(process.memoryUsage().heapUsed).toBeLessThan(MEMORY_LIMIT)
  })

  test('should inorder', () => {
    const output = '2 3 1 6 7 5 8 4 0'
    expect(postOrder(0).join(' ')).toEqual(output)
    expect(process.memoryUsage().heapUsed).toBeLessThan(MEMORY_LIMIT)
  })
})
