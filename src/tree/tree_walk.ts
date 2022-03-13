import { MaybeNode } from "./utility.ts";

export function preorder(node: MaybeNode, l: number[]): number[] {
  if (node?.value === undefined) return l;

  l.push(node.value);
  preorder(node?.l, l);
  preorder(node?.r, l);

  return l;
}

export function inorder(node: MaybeNode, l: number[]): number[] {
  if (node?.value === undefined) return l;

  inorder(node?.l, l);
  l.push(node.value!);
  inorder(node?.r, l);

  return l;
}
export function postorder(node: MaybeNode, l: number[]): number[] {
  if (node?.value === undefined) return l;

  postorder(node?.l, l);
  postorder(node?.r, l);
  l.push(node.value!);

  return l;
}
