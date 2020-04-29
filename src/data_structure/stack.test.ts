import { main } from './stack'

test('should calculate correctly ', () => {
  const input = '1 2 + 3 4 - *'
  expect(main(input)).toEqual(-3)
})
