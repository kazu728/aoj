import { MaybeValue } from "./utility.ts";

const PRINT = "print";
const INSERT = "insert";
const FIND = "find";
const DELETE = "delete";

type INSERT = [typeof INSERT, number];
type FIND = [typeof FIND, number];
type DELETE = [typeof DELETE, number];
type PRINT = typeof PRINT;

type OPERATION = INSERT | FIND | DELETE | PRINT;
type MaybeBSTNode = BSTNode | undefined;

export type InputType = (number | PRINT | INSERT | DELETE | FIND)[];
export type OmitInput = OPERATION[];

class BSTNode {
  value: MaybeValue;
  p: MaybeBSTNode;
  l: MaybeBSTNode;
  r: MaybeBSTNode;
}

export function main(input: OmitInput): [number[], number[]] {
  let node: MaybeBSTNode = new BSTNode();

  const setNode = (bstNode: MaybeBSTNode) => (node = bstNode);

  for (const operations of input) {
    if (Array.isArray(operations)) {
      const [operatioin, operand] = operations;
      switch (operatioin) {
        case INSERT:
          setNode(insert(operand, node));
          break;
        case FIND:
          find(operand, node) === undefined ? "no" : "yes";
          break;
        case DELETE:
          const targetNode = find(operand, node);
          if (targetNode === undefined) continue;
          const reconstructedNode = deleteNode(targetNode);
          if (reconstructedNode !== undefined) setNode(reconstructedNode);
          break;
        default:
          throw new Error("Unexpected input");
      }
    }
    switch (operations) {
      case PRINT:
        return print(node);
    }
  }
  throw new Error("Unexpected imput");
}

const insert = (operand: number, node: BSTNode): BSTNode => {
  if (node.value === undefined) {
    node.value = operand;
    return node;
  }

  const currentNode = new BSTNode();
  currentNode.value = operand;

  if (node.value! < operand) {
    if (node.r !== undefined) {
      node.r = insert(operand, node.r);
      node.r!.p = node;
      return node;
    }

    node.r = currentNode;
  }

  if (operand < node.value!) {
    if (node.l !== undefined) {
      node.l = insert(operand, node.l);
      node.l.p = node;
      return node;
    }

    node.l = currentNode;
  }

  return node;
};

const find = (operand: number, node: MaybeBSTNode): MaybeBSTNode => {
  const value = node?.value;

  if (value === operand) return node;
  if (value !== undefined && operand < value) return find(operand, node?.l);
  if (value !== undefined && value < operand) return find(operand, node?.r);

  return;
};

const print = (node: BSTNode): [number[], number[]] => {
  const preorderlist: number[] = preorder(node, []);
  const inorderlist: number[] = inorder(node, []);

  return [preorderlist, inorderlist];
};

const deleteNode = (node: BSTNode): void | BSTNode => {
  if (node.l === undefined && node.r === undefined) {
    const parentNode = node.p;
    if (node.value === parentNode?.l?.value) {
      parentNode!.l = undefined;
    }

    if (node.value === parentNode?.r?.value) {
      parentNode!.r = undefined;
    }
  }

  if (node.l === undefined && node.r !== undefined) {
    if (node.p?.l?.value === node.value) {
      node.p!.l = node.r;
    }

    if (node.p?.r?.value === node.value) {
      node.p!.r = node.r;
    }
    node.r.p = node.p;
  }

  if (node.l !== undefined && node.r === undefined) {
    if (node.p?.l?.value === node.value) {
      node.p!.l = node.l;
    }

    if (node.p?.r?.value === node.value) {
      node.p!.r = node.l;
    }
    node.l.p = node.p;
  }

  if (node.l !== undefined && node.r !== undefined) {
    if (node.p === undefined) {
      node.l.p = undefined;
      node.l.r = node.r;
      return node.l;
    }
    if (node.p?.l?.value === node.value) {
      node.p!.l = node.l;
      node.l = node.p;
      node.l!.r = node.r;
    }

    if (node.p?.r?.value === node.value) {
      node.p!.r = node.l;
      node.l = node.p;
      node.l!.r = node.r;
    }
  }
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
