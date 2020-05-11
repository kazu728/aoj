import { MEMORY_LIMIT } from '../constant'
import {
  main,
  preorderList,
  inorderList,
  answerListIfItsExist,
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

describe('binary search tree find', () => {
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

  test('should find', () => {
    const output = 'yes no'
    expect(answerListIfItsExist.join(' ')).toEqual(output)
    expect(process.memoryUsage().heapUsed).toBeLessThan(MEMORY_LIMIT)
  })
})
