import { main } from './maximum_heap'

const input: [number, number[]] = [10, [0, 4, 1, 3, 2, 16, 9, 10, 14, 8, 7]]

describe('maximum heap', () => {
  test('should ', () => {
    const outpuut = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1]
    expect(main(input)).toEqual(outpuut)
  })
})
