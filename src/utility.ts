const generateRandomNumber = () => Math.floor(Math.random() * Math.floor(10))

const generateInputValueFromLength = (length: number) => {
  let array: number[] = []

  for (let i = 0; i < length; i++) {
    array = [...array, generateRandomNumber()] as number[]
  }

  return `${length.toString()}\n${array.join().replace(/,/g, ' ').trim()}`
}

export const sortByApi = (array: number[]): number[] =>
  array.sort((a, b) => {
    if (a < b) return -1
    if (a > b) return 1
    return 0
  })

/**
 * @returns input value
 * line1 array lngth
 * line2 array element valuue
 * e.g
 * 6
 * 5 2 4 6 1 3
 */
export const generateInputValue = (): string => {
  const arrayLength = generateRandomNumber()
  return generateInputValueFromLength(arrayLength)
}

/**
 * @returns input value
 * big array version of #generateInputValue
 */
export const generateInputValueBigArray = (): string => {
  const arrayLength = 100
  return generateInputValueFromLength(arrayLength)
}

/**
 * e.g.
 * input  6
 *        5 2 4 6 1 3
 * output [6, [5, 2, 4, 6, 1, 3]]
 */
export const generateInputArray = (input: string): [number, number[]] => {
  const inputSplitted: string[] = input.split(/\n/)
  return [
    parseInt(inputSplitted[0]),
    inputSplitted[1].split(' ').map((e) => parseInt(e)),
  ]
}

/**
 * e.g.
 * input 5
 *       1 2 3 4 5
 *       3
 *       3 4 1
 * output [5, [1, 2, 3, 4, 5], 3, [3, 4, 1]]
 */
export const splitLengthWithArray = (input: string) => {
  type splittedInputType = [number, number[], number, number[]]
  return input
    .split(/\n/)
    .map((e: string, index) =>
      index % 2 === 0
        ? parseInt(e)
        : e.split(' ').map((f: string) => parseInt(f))
    ) as splittedInputType
}
