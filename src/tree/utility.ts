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
  nodeNumber: number,
  parent: number,
  l: number,
  r: number
): Node | undefined => {
  const node = new Node();

  if (!input[nodeNumber]) return undefined;

  node.value = nodeNumber;
  const parentNode = new Node();
  parentNode.value = parent;
  node.parent = parentNode;

  if (l !== -1) {
    if (!input[l]) return;
    const [_, childNodeL, childNodeR] = input[l];

    node.l = genNodeTree(input, l, nodeNumber, childNodeL, childNodeR);
  }

  if (r !== -1) {
    if (!input[r]) return;
    const [_, childNodeL, childNodeR] = input[r];

    node.r = genNodeTree(input, r, nodeNumber, childNodeL, childNodeR);
  }

  return node;
};
