export type InputType<T> = number | string | [string, T];

class Node {
  constructor(public value: number, public left?: Node, public right?: Node) {}
}

let rootNode: Node;

const inorderList: number[] = [];
const preorderList: number[] = [];
export const isFound: string[] = [];

export const init = () => {
  inorderList.length = 0;
  preorderList.length = 0;
  isFound.length = 0;
};

export default function main(input: InputType<number>[]) {
  const [_, elements] = [input.shift(), input];

  const execute = (e: InputType<number>) => {
    if (!Array.isArray(e)) return print();

    const [action, key] = e;
    if (action === "insert") insert(rootNode, key);
    if (action === "find") {
      find(key, rootNode) ? isFound.push("yes") : isFound.push("no");
    }
    if (action === "delete") deleteNode(key, rootNode);
  };

  elements.forEach(execute);
  return [inorderList, preorderList];
}

const insert = (node: Node, key: number) => {
  if (!rootNode) {
    rootNode = new Node(key, undefined, undefined);
    return;
  }

  if (node.value < key) {
    if (!node.right) node.right = new Node(key, undefined, undefined);
    insert(node.right, key);
  }

  if (node.value > key) {
    if (!node.left) node.left = new Node(key, undefined, undefined);
    insert(node.left, key);
  }
};

const find = (key: number, node?: Node): Node | undefined => {
  if (!node) return;

  const foundNode: Node | undefined =
    node.value < key ? find(key, node.right) : find(key, node.left);

  if (node.value === key) return node;

  return foundNode;
};

const getSuccessor = (node: Node): Node => {
  if (!node.left) return node;
  return getSuccessor(node.left);
};

const deleteNode = (key: number, node?: Node) => {
  if (!node) return;
  let foundNode = find(key, node);

  if (!foundNode) return;

  if (!foundNode.right && !foundNode.left) {
    foundNode = undefined;
    return foundNode;
  }
  if (foundNode.right && !foundNode.left) {
    foundNode = foundNode.right;
    return foundNode;
  }
  if (!foundNode.right && foundNode.left) {
    foundNode = foundNode?.left;
    return foundNode;
  }

  if (foundNode.right && foundNode.left) {
    const targetfoundNode = getSuccessor(foundNode);
    foundNode = targetfoundNode;
    return foundNode;
  }
};

const makeInorderList = (node: Node): number[] => {
  if (node.left) makeInorderList(node.left);

  inorderList.push(node.value);

  if (node.right) makeInorderList(node.right);

  return inorderList;
};

const makePreorderList = (node: Node): number[] => {
  preorderList.push(node.value);
  if (node.left) makePreorderList(node.left);

  if (node.right) makePreorderList(node.right);

  return preorderList;
};

const print = () => [makeInorderList(rootNode), makePreorderList(rootNode)];
