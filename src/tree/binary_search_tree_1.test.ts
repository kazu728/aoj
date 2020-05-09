import { MEMORY_LIMIT } from '../constant'
import { main, getPreorderList, getInorderList } from './binary_search_tree_1'

const input = `8
insert 30
insert 88
insert 12
insert 1
insert 20
insert 17
insert 25
print`

describe('binary search tree', () => {
  beforeAll(() => main(input))

  test('display with preorder', () => {
    const output = '30 12 1 20 17 25 88'
    expect(getPreorderList().join(' ')).toEqual(output)
    expect(process.memoryUsage().heapUsed).toBeLessThan(MEMORY_LIMIT)
  })

  test('display with inorder', () => {
    const output = '1 12 17 20 25 30 88'
    expect(getInorderList().join(' ')).toEqual(output)
    expect(process.memoryUsage().heapUsed).toBeLessThan(MEMORY_LIMIT)
  })
})
