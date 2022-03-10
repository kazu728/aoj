import { KIND } from "./tree.d.ts";
import { genNodeTree, Node, MaybeNode } from "./utility.ts";

type Output = {
  node: number;
  parent: number;
  degree: number;
  height: number;
  kind: KIND;
};

export type BinaryTreeInput = [number, ...[...number[]][]];
export type BinaryTreeOutput = Output[];
type OmitTreeInput = number[][];

const getHeight = (node: Node, height: number): number => {
  const lheight = node.l === undefined ? height : getHeight(node.l, height + 1);
  const rHeight = node.r === undefined ? height : getHeight(node.r, height + 1);

  return Math.max(lheight, rHeight);
};

const getDegree = (node: Node): number => {
  if (node.l !== undefined && node.r !== undefined) return 2;
  if (node.l === undefined && node.r !== undefined) return 1;
  if (node.l !== undefined && node.r === undefined) return 1;
  return 0;
};

const getKind = (node: Node): KIND => {
  if (node.parent?.value === -1) return "root";
  if (node.l !== undefined || node.r !== undefined) return "internal node";
  return "leaf";
};

const traverse = (node: Node, output: BinaryTreeOutput): BinaryTreeOutput => {
  const height = getHeight(node, 0);
  const degree = getDegree(node);
  const kind = getKind(node);

  const o: Output = {
    node: node.value!,
    parent: node.parent?.value!,
    height,
    degree,
    kind,
  };
  output.push(o);

  if (node.l !== undefined) traverse(node.l, output);
  if (node.r !== undefined) return traverse(node.r, output);

  return output;
};

export function main(input: BinaryTreeInput): BinaryTreeOutput {
  const omitInput: OmitTreeInput = input.filter(
    (_, i): _ is number[] => i !== 0
  );
  const [node, leftNode, rightNode] = omitInput[0];

  const nodeTree: MaybeNode = genNodeTree(
    omitInput,
    node,
    -1,
    leftNode,
    rightNode
  );
  if (nodeTree === undefined) return [];

  return traverse(nodeTree, []);
}
