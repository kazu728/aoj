import { main } from './complete_binary_tree'

describe('complete binary tree', () => {
  test('should order', () => {
    const input: [number, number[]] = [5, [7, 8, 1, 2, 3]]

    main(input)
  })
})
