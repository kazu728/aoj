export type InputType<T> = [number, T[]];

export default function main<T>(input: InputType<T>) {
  const makeSentinelAddedElemets = (): T[] => {
    const elements = input.filter((e, i): e is T[] => i !== 0).pop();
    if (!elements) throw new Error("Invalid args");

    return [0 as any, ...elements];
  };

  return print([...makeSentinelAddedElemets()]);
}

const print = <T>(elements: T[]) => {
  const result: any = [];

  elements.forEach((e: T, i: number) => {
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
