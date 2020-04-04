import { generateInputArray } from '../utility'

export const sort = (input: string) => {
  const [length, array] = generateInputArray(input)

  let count = 0

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      let swap

      if (array[j + 1] < array[j]) {
        swap = array[j]
        array[j] = array[j + 1]
        array[j + 1] = swap

        count += 1
      }
    }
  }

  return array
}
