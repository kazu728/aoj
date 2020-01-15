let top = 0;
const stack: number[] = [];

export const excute = (input: string) => {
  const isOperand = (e: string): Boolean =>
    e === "+" || e === "-" || e === "*" || e === "/";

  const push = (element: string | number) => {
    stack[++top] = typeof element === "string" ? parseInt(element) : element;
  };

  const pop = (): number => {
    top--;
    return stack[top + 1];
  };

  const calculate = (element: string) => {
    const a = pop();
    const b = pop();

    switch (element) {
      case "+":
        push(b + a);
        break;
      case "-":
        push(b - a);
        break;
      case "*":
        push(b * a);
        break;
      case "/":
        push(b * a);
        break;
    }
  };

  const inputArray = input.split(" ");

  for (let i = 0; i < inputArray.length; i++) {
    const a = inputArray[i];
    isOperand(a) ? calculate(a) : push(a);
  }
  return stack[top]
};
