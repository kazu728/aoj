import { excute } from './stack'

test('should calculate correctly ', () => {
  const input = '1 2 + 3 4 - *'
  expect(excute(input)).toEqual(-3)
})
