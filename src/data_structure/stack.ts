export type Operand = "+" | "-" | "*" | "/";

const stack: number[] = [];
let top = 0;

const push = (opecode: number) => {
  stack[top] = opecode;
  top++;
};

const calculateResult = (a: number, b: number, operand: Operand): number => {
  switch (operand) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
  }
};

const calculate = (operand: Operand) => {
  const [a, b] = [stack[top - 2], stack[top - 1]];
  if (!(a && b)) throw new Error(`Underflow`);

  top -= 2;
  stack[top] = calculateResult(a, b, operand);
  top++;
};

export default function main(input: (Operand | number)[]): number {
  for (let i = 0; i < input.length; i++) {
    const element = input[i];
    typeof element === "number" ? push(element) : calculate(element);
  }
  return stack[0];
}
