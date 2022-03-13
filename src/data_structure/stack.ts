const OPERAND = {
  PLUS: "+",
  MINUS: "-",
  ASTERISK: "*",
  SLASH: "/",
} as const;

export type Operand = typeof OPERAND[keyof typeof OPERAND];
export type InputType = Operand | number;

export function main(input: InputType[]): number {
  const stack: number[] = [];
  let p = 0;

  for (const e of input) {
    if (Number.isInteger(e)) {
      stack[p++] = Number(e);
      continue;
    }
    const a = stack[p - 2];
    const b = stack[p - 1];
    p -= 2;

    switch (e) {
      case OPERAND.PLUS:
        stack[p++] = a + b;
        break;
      case OPERAND.MINUS:
        stack[p++] = a - b;
        break;
      case OPERAND.ASTERISK:
        stack[p++] = a * b;
        break;
    }
  }
  
  return stack[p - 1];
}
