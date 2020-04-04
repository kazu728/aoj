export const main = (input: string) => {
  const inputSplitted = input.split(/\n/)

  const length: number = parseInt(inputSplitted[0], 10)
  const array: string[] = inputSplitted[1].split(' ')

  const toNumber = (e: string) => parseInt(e.slice(1, 2), 10)
  const isStable = (j: number, min: number) => j === min

  let swap

  for (let i = 0; i < length; i++) {
    let min: string = array[i]
    for (let j = i + 1; j < length; j++) {
      if (
        toNumber(array[j]) < toNumber(min) &&
        !isStable(toNumber(array[j]), toNumber(min))
      ) {
        swap = min
        min = array[j]
        array[j] = swap
      }
      array[i] = min
    }
  }

  console.log(array)
}
