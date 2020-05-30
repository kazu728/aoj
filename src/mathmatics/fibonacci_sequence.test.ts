import main from './fibonacci_sequence'

test('fibonacci', () => {
  expect(main()[3]).toEqual(3)
})
