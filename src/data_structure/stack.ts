export type Operand = "+" | "-" | "*" | "/";

const stack: number[] = [];
let top = 0;

const push = (opecode: number) => {
  stack[top] = opecode;
  top++;
};

const calculate = (operand: Operand) => {
  const [a, b] = [stack[top - 2], stack[top - 1]];
  if (!(a && b)) throw new Error(`Underflow`);

  top -= 2;
  const result =
    operand === "+"
      ? a + b
      : operand === "-"
      ? a - b
      : operand === "*"
      ? a * b
      : a / b;

  stack[top] = result;
  top++;
};

export default function main<T extends (Operand | number)[]>(input: T) {
  for (let i = 0; i < input.length; i++) {
    typeof input[i] === "number"
      ? push(input[i] as number)
      : calculate(input[i] as Operand);
  }
  return stack[0];
}
