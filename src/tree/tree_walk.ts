type InputType<T> = [number, ...[...T[]][]];

class Node<U> {
  constructor(public p: U, public l: U, public r: U) {}
}

const preorderList: number[] = [];
const inorderList: number[] = [];
const postorderList: number[] = [];

const nodes: Node<number>[] = [];

export default function init(input: InputType<number>) {
  const elementsList = input.filter((e, i): e is number[] => i !== 0);
  search(elementsList);
}

export const preorder = (n: number) => {
  if (n === -1) return;
  preorderList.push(n);

  preorder(nodes[n].l);
  preorder(nodes[n].r);

  return preorderList;
};

export const inorder = (n: number) => {
  if (n === -1) return;

  inorder(nodes[n].l);
  inorderList.push(n);
  inorder(nodes[n].r);

  return inorderList;
};

export const postOrder = (n: number) => {
  if (n === -1) return;

  postOrder(nodes[n].l);
  
  postOrder(nodes[n].r);
  postorderList.push(n);

  return postorderList;
};

const search = (elementsList: number[][]) => {
  elementsList.forEach((elements, i) => {
    const parent = searchParent(i);
    nodes.push(new Node(parent, elements[1], elements[2]));
  });
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
