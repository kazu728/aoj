export type InputType<T> = [number, T[]];

export default function main(input: InputType<number>) {
  const makeSentinelAddedElemets = (): number[] => {
    const elements = input.filter((e, i): e is number[] => i !== 0).pop();
    if (!elements) throw new Error("Invalid args");

    return [0, ...elements];
  };

  return print([...makeSentinelAddedElemets()]);
}

const print = (elements: number[]): number[][] => {
  const result: number[][] = [];

  elements.forEach((e: number, i: number) => {
    if (!i) return;

    const node = i;
    const key = e;
    const left = elements[i * 2];
    const right = elements[i * 2 + 1];
    const parent = elements[Math.floor(i / 2)];

    result.push([node, key, left, right, parent].filter(Boolean));
  });

  return result;
};
