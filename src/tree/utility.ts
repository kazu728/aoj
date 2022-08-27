export type MaybeValue = number | undefined;
export type MaybeNode = Node | undefined;

export class Node {
  value: MaybeValue;
  parent: MaybeNode;
  l: MaybeNode;
  r: MaybeNode;
}

export const genNodeTree = (
  input: number[][],
  key: number,
  parent: MaybeNode,
  l: number,
  r: number
): MaybeNode => {
  if (!input[key]) return undefined;

  const currentNode = new Node();

  currentNode.value = key;
  currentNode.parent = parent;

  if (l !== -1) {
    const [_, childNodeL, childNodeR] = input[l];

    currentNode.l = genNodeTree(input, l, currentNode, childNodeL, childNodeR);
  }

  if (r !== -1) {
    const [_, childNodeL, childNodeR] = input[r];

    currentNode.r = genNodeTree(input, r, currentNode, childNodeL, childNodeR);
  }

  return currentNode;
};
