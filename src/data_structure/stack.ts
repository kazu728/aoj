let top = 0
const stack: number[] = []
const OPE_CODES = ['+', '-', '*', '/']

const isOpeCode = (e: string): boolean => OPE_CODES.includes(e)

const push = (element: string | number) => {
  stack[++top] = typeof element === 'string' ? parseInt(element, 10) : element
}

const pop = (): number => {
  top--
  return stack[top + 1]
}

const calculate = (element: string) => {
  const a = pop()
  const b = pop()

  switch (element) {
    case '+':
      push(b + a)
      break
    case '-':
      push(b - a)
      break
    case '*':
      push(b * a)
      break
    case '/':
      push(b * a)
      break
    default:
      break
  }
}

export const main = (input: string) => {
  const inputArray = input.split(' ')

  for (let i = 0; i < inputArray.length; i++) {
    const a = inputArray[i]
    isOpeCode(a) ? calculate(a) : push(a)
  }
  return stack[top]
}
