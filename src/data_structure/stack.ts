export type Operand = "+" | "-" | "*" | "/";
export type InputType = (Operand | number)[];

const stack: number[] = [];
let top = 0;

export default function main(input: InputType): number {
  for (const e of input) {
    typeof e === "number" ? push(e) : pushCalculatedValue(e);
  }

  return stack[0];
}

const push = (opecode: number): void => {
  stack[top] = opecode;
  top++;
};

const calculate = (a: number, b: number, operand: Operand): number => {
  switch (operand) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      const _exhaustiveCheck: never = operand;

      throw new Error();
  }
};

const pushCalculatedValue = (operand: Operand): void => {
  const [a, b] = [stack[top - 2], stack[top - 1]];
  if (!(a && b)) throw new Error(`Underflow`);

  top -= 2;
  stack[top] = calculate(a, b, operand);
  top++;
};
