import { MEMORY_LIMIT } from '../constant'
import {
  main,
  preorderList,
  inorderList,
  answerList,
} from './binary_search_tree'

describe('binary search tree', () => {
  const input = `8
insert 30
insert 88
insert 12
insert 1
insert 20
insert 17
insert 25
print`

  beforeAll(() => main(input))

  test('display with preorder', () => {
    const output = '30 12 1 20 17 25 88'
    expect(preorderList.join(' ')).toEqual(output)
    expect(process.memoryUsage().heapUsed).toBeLessThan(MEMORY_LIMIT)
  })

  test('display with inorder', () => {
    const output = '1 12 17 20 25 30 88'
    expect(inorderList.join(' ')).toEqual(output)
    expect(process.memoryUsage().heapUsed).toBeLessThan(MEMORY_LIMIT)
  })
})

describe('binary search tree', () => {
  const input = `10
insert 30
insert 88
insert 12
insert 1
insert 20
find 12
insert 17
insert 25
find 16`

  beforeAll(() => main(input))

  test('find', () => {
    const output = 'yes no'
    expect(answerList.join(' ')).toEqual(output)
    expect(process.memoryUsage().heapUsed).toBeLessThan(MEMORY_LIMIT)
  })
})

describe('binary search tree delete', () => {
  const input = `18
insert 8
insert 2
insert 3
insert 7
insert 22
insert 1
find 1
find 2
find 3
find 4
find 5
find 6
find 7
find 8
print
delete 3
delete 7
print`

  beforeAll(() => main(input))

  test('should delete', () => {
    expect(process.memoryUsage().heapUsed).toBeLessThan(MEMORY_LIMIT)
  })

  test('should delete', () => {
    expect(process.memoryUsage().heapUsed).toBeLessThan(MEMORY_LIMIT)
  })
})
