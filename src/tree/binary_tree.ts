type InputType<T> = [number, ...[...T[]][]];

class Node<U> {
  constructor(public p: U, public l: U, public r: U) {}
}

const nodes: Node<number>[] = [];

export default function main(input: InputType<number>) {
  const elementsList = input.filter((e, i): e is number[] => i !== 0);
  search(elementsList)();
}

const search = (elementsList: number[][]) => {
  elementsList.forEach((elements, i) => {
    const parent = searchParent(i);
    nodes.push(new Node(parent, elements[1], elements[2]));
  });
  return print;
};

const searchParent = (searchedNode: number): number => {
  let result = -1;

  nodes.forEach((node, index) => {
    if (node.l === searchedNode || node.r === searchedNode) {
      result = index;
    }
  });

  return result;
};

const print = () => {
  nodes.forEach((node, index) => {
    console.log(
      `node: %s , parent: %s, siblings : %s, degree: %s, depth: %s, height: %s , %s`,
      index,
      node.p,
      siblings(index),
      degree(node),
      depth(0, index),
      height(0, index),
      location(node)
    );
  });
};

const siblings = (index: number) => {
  const parent = nodes[index].p;

  if (parent === -1) return -1;

  const [leftNode, rightNode] = [nodes[parent].l, nodes[parent].r];
  return leftNode === index ? rightNode : leftNode;
};

const degree = (node: Node<number>) => {
  let degree = 0;
  if (node.l !== -1) degree++;
  if (node.r !== -1) degree++;

  return degree;
};

const depth = (acc: number, index: number): number => {
  const parent = nodes[index].p;
  if (parent === -1) return acc;

  acc++;
  return depth(acc, parent);
};

const height = (acc: number, index: number): number => {
  if (index === -1) return acc;

  const [left, right] = [nodes[index].l, nodes[index].r];
  if (left !== -1 || right !== -1) acc++;

  const [leftHeight, rightHeight] = [
    height(acc, left) || height(acc, right),
    height(acc, right) || height(acc, left),
  ];

  return leftHeight < rightHeight ? rightHeight : leftHeight;
};

const location = (node: Node<number>): string => {
  const Node = { ROOT: "root", LEAF: "leaf", INTERNAL_NODE: "internal node" };

  if (node.p === -1) return Node.ROOT;

  if (node.l === -1 && node.r === -1) return Node.LEAF;

  return Node.INTERNAL_NODE;
};
