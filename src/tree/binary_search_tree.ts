import { MaybeValue } from "./utility.ts";

const PRINT = "print";
const INSERT = "insert";

type INSERT = [typeof INSERT, number];
type PRINT = typeof PRINT;
type OPERATION = INSERT | PRINT;
type MaybeBSTNode = BSTNode | undefined;

export type InputType = (number | PRINT | INSERT)[];
export type OmitInput = OPERATION[];

class BSTNode {
  value: MaybeValue;
  l: MaybeBSTNode;
  r: MaybeBSTNode;
}

export function main(input: OmitInput): [number[], number[]] {
  let node = new BSTNode();

  for (const operations of input) {
    if (Array.isArray(operations)) {
      const [operatioin, operand] = operations;
      if (operatioin === INSERT) {
        const insertedNode = insert(operand, node);

        node = insertedNode!;
      }
    }
    switch (operations) {
      case PRINT:
        return print(node);
    }
  }
  throw new Error("Unexpected imput");
}

const insert = (operand: number, node: MaybeBSTNode): MaybeBSTNode => {
  if (node?.value === undefined) {
    node!.value = operand;
    return node;
  }

  const currentNode = new BSTNode();
  currentNode.value = operand;

  if (node.value! < operand) {
    if (node.r !== undefined) {
      node.r = insert(operand, node.r);
      return node;
    }

    node.r = currentNode;
    return node;
  }

  if (operand < node.value!) {
    if (node.l !== undefined) {
      node.l = insert(operand, node.l);
      return node;
    }

    node.l = currentNode;
    return node;
  }

  return node;
};

const print = (node: BSTNode): [number[], number[]] => {
  const preorderlist: number[] = preorder(node, []);
  const inorderlist: number[] = inorder(node, []);

  return [preorderlist, inorderlist];
};

const preorder = (node: MaybeBSTNode, l: number[]): number[] => {
  if (node?.value === undefined) return l;

  l.push(node.value);
  preorder(node.l, l);
  preorder(node.r, l);

  return l;
};
const inorder = (node: MaybeBSTNode, l: number[]): number[] => {
  if (node?.value === undefined) return l;

  inorder(node.l, l);
  l.push(node.value);
  inorder(node.r, l);

  return l;
};
