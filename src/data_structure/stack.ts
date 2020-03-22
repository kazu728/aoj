let top = 0;
const stack: number[] = [];

export const excute = (input: string) => {
  const isOpeCode = (e: string): boolean =>
    e === '+' || e === '-' || e === '*' || e === '/';

  const push = (element: string | number) => {
    stack[++top] =
      typeof element === 'string' ? parseInt(element, 10) : element;
  };

  const pop = (): number => {
    top--;
    return stack[top + 1];
  };

  const calculate = (element: string) => {
    const a = pop();
    const b = pop();

    switch (element) {
      case '+':
        push(b + a);
        break;
      case '-':
        push(b - a);
        break;
      case '*':
        push(b * a);
        break;
      case '/':
        push(b * a);
        break;
      default:
        break;
    }
  };

  const inputArray = input.split(' ');

  for (let i = 0; i < inputArray.length; i++) {
    const a = inputArray[i];
    isOpeCode(a) ? calculate(a) : push(a);
  }
  return stack[top];
};
