import {
  generateInputValue,
  generateInputValueBigArray,
  generateInputArray,
  sortByApi,
} from '../utility'
import { main } from './merge_sort'

test('should sort', () => {
  const input = generateInputValue()
  const array = generateInputArray(input)[1]

  expect(main(input)).toEqual(sortByApi(array))
})

test('should sort big array', () => {
  const input = generateInputValueBigArray()
  const array = generateInputArray(input)[1]

  expect(main(input)).toEqual(sortByApi(array))
})
