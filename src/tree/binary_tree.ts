import { KIND } from "./tree.d.ts";
import { genNodeTree, MaybeNode, Node } from "./utility.ts";

type Output = {
  node: number;
  parent: number;
  sibling: number;
  degree: number;
  depth: number;
  height: number;
  kind: KIND;
};

export type BinaryTreeInput = number[][];
export type BinaryTreeOutput = Output[];

export function main(input: BinaryTreeInput): BinaryTreeOutput {
  const rootNode = genTree(input, 0);
  return genOutput(rootNode, []);
}

const genTree = (input: BinaryTreeInput, index: number): Node => {
  const rootNode = genNodeTree(
    input,
    index,
    undefined,
    input[0][1],
    input[0][2]
  );
  if (rootNode === undefined) throw new Error("Unexpected");

  return rootNode;
};

const genOutput = (node: Node, acc: Output[]): Output[] => {
  acc.push({
    node: node.value!,
    degree: getDegree(node),
    depth: getDepth(node, 0),
    height: getheight(node, 0),
    parent: node.parent?.value === undefined ? -1 : node.parent?.value,
    sibling: getSibling(node) || -1,
    kind: getKind(node),
  });

  if (node.l !== undefined) genOutput(node.l, acc);
  if (node.r !== undefined) genOutput(node.r, acc);

  return acc;
};

const getDegree = (node: Node): number => {
  if (node.l !== undefined && node.r !== undefined) return 2;
  if (node.l === undefined && node.r === undefined) return 0;

  return 1;
};

const getKind = (node: Node): KIND => {
  if (node.parent === undefined) return "root";
  if (node.l === undefined && node.r === undefined) return "leaf";

  return "internal node";
};

const getSibling = (node: Node): number | undefined => {
  if (node.value === node.parent?.r?.value) return node.parent?.l?.value;
  if (node.value === node.parent?.l?.value) return node.parent?.r?.value;
};

const getDepth = (node: Node, depth: number): number => {
  if (node.parent === undefined) return depth;
  return getDepth(node.parent, depth + 1);
};

const getheight = (node: MaybeNode, height: number): number => {
  if (node?.r === undefined && node?.l === undefined) return height;
  const left = getheight(node.l, height + 1) || -1;
  const right = getheight(node.r, height + 1) || -1;

  return Math.max(left, right);
};
