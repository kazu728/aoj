export type InputType = [number, ...[string, number][]];

class Node<T> {
  constructor(public key: T, public prev: T, public next: T) {}
}

let linkedList: Node<number>[] = [];
const answerList: number[] = [];

export default function main(input: InputType) {
  const length = input.filter((_, i): _ is number => !i)[0];
  const elements = input.filter((_, i): _ is [string, number] => i !== 0);

  // sentinel node
  linkedList[0] = new Node(-1, -1, -1);

  for (let i = 0; i < length; i++) {
    const [order, operand] = elements[i];
    order === "insert" ? insertNode(operand) : deleteNode(operand);
  }

  return answer(-1);
}

const insertNode = (operand: number): void => {
  let length = linkedList.length;

  linkedList[length] = new Node(
    operand,
    linkedList[0].key,
    linkedList[length - 1].key
  );
  linkedList[length - 1].prev = operand;

  linkedList[0].next = operand;
};

const deleteNode = (operand: number): void => {
  for (let i = 0; i < linkedList.length; i++) {
    if (linkedList[i].key !== operand) continue;

    linkedList[i + 1].next = linkedList[i].next;
    linkedList[i - 1].prev = linkedList[i].prev;
  }
};

const answer = (key: number) => {
  for (let i = 0; i < linkedList.length; i++) {
    if (linkedList[i].key !== key) continue;

    if (key !== -1) answerList.push(key);
    if (linkedList[i].next === -1) return;

    answer(linkedList[i].next);
  }
  return answerList;
};
