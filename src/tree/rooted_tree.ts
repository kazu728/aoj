export type RootedTreeInput = [number, ...[...number[]][]];
type KIND = "root" | "internal node" | "leaf";

export type RootedTreeOutput = {
  node: number;
  parent: number;
  depth: number;
  kind: KIND;
  children: number[];
};

type RecursiveInput = RootedTreeOutput & {
  nodes: RootedTreeOutput[];
  input: RootedTreeInput;
};

const go = (recursiveInput: RecursiveInput): RootedTreeOutput[] => {
  const { nodes, input, node, parent, depth, kind, children } = recursiveInput;

  nodes.push({ node, parent, depth, kind, children });

  for (const child of children) {
    const childInput = input[child + 1];
    if (!childInput) continue;

    const [childNode, _, ...childChidlren] = input[child + 1] as number[];
    const kind = childChidlren.length === 0 ? "leaf" : "internal node";

    go({
      nodes,
      input,
      node: childNode,
      parent: node,
      depth: depth + 1,
      kind,
      children: childChidlren,
    });
  }

  return nodes;
};

export function main(input: RootedTreeInput): RootedTreeOutput[] {
  const [node, _, ...children] = input[1];
  const output: RootedTreeOutput[] = go({
    nodes: [],
    input,
    node,
    parent: -1,
    depth: 0,
    kind: "root",
    children,
  });

  return output;
}
