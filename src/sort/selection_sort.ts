import { generateInputArray } from '../utility'

let swap

export const sort = (input: string) => {
  const [length, array] = generateInputArray(input)

  for (let i = 0; i < length; i++) {
    let min = array[i]
    for (let j = i; j < length; j++) {
      if (array[j] < min) {
        swap = min
        min = array[j]
        array[j] = swap
      }
    }
    array[i] = min
  }
  return array
}
