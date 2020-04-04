let hashTable: string[]

const h1 = (key: number): number => key % hashTable.length
const h2 = (key: number): number => 1 + (key % (hashTable.length - 1))

const h = (key: number, i: number): number => {
  return (h1(key) + i * h2(key)) % hashTable.length
}

const find = (key: number, value: string): number | null => {
  let i = 0
  while (true) {
    const j = h(key, i)
    if (hashTable[j] === value) {
      return j
    }
    if (!hashTable[j] || i >= hashTable.length) {
      return null
    }
    i += 1
  }
}

const insert = (key: number, value: string): number => {
  let i = 0
  while (true) {
    const j = h(key, i)
    if (!hashTable[j]) {
      hashTable[j] = value
      return j
    }
    i += 1
  }
}

const generateHashKey = (v: string): number => (v.charAt(0) === 'A' ? 1 : 2)

export const main = (input: string) => {
  const splittedValue: string[] = input.split(/\n/)

  const [length, array]: [number, string[]] = [
    parseInt(splittedValue[0], 10),
    splittedValue.filter((_e, index) => index),
  ]

  hashTable = new Array(array.length)
  let answers: string[] = []

  for (let i = 0; i < length; i++) {
    const [execution, value] = array[i].split(' ')

    if (execution === 'insert') insert(generateHashKey(value), value)
    if (execution === 'find') {
      if (find(generateHashKey(value), value)) {
        answers = [...answers, 'yes']
      } else {
        answers = [...answers, 'no']
      }
    }
  }
  return answers
}
