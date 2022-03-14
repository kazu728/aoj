const INSERT = "insert";
const DELETE = "delete";
type OPERATION = typeof INSERT | typeof DELETE;

export type InputType = [number, ...[OPERATION, number][]];
export type OmitInput<T> = [OPERATION, T][];

class LinkedlistNode<T> {
  value: T | undefined;
  prev: LinkedlistNode<T> | undefined;
  next: LinkedlistNode<T> | undefined;
}

type MyabeLinkedListNode<T> = LinkedlistNode<T> | undefined;

export function main<T>(input: OmitInput<T>): T[] {
  const sentinelNode = new LinkedlistNode<T>();

  const insertNode = (operand: T): void => {
    const sentinelNodeNext = sentinelNode.next;

    const linkedListNode = new LinkedlistNode<T>();
    linkedListNode.value = operand;
    linkedListNode.next = sentinelNodeNext;
    linkedListNode.prev = sentinelNode;

    sentinelNode.next = linkedListNode;

    if (sentinelNodeNext !== undefined) {
      sentinelNodeNext.prev = linkedListNode;
    }
  };

  const deleteNode = (node: MyabeLinkedListNode<T>, operand: T): void => {
    if (node?.value === undefined) return;
    if (node?.value !== operand) return deleteNode(node.next, operand);

    const nextNode = node.next;
    node.prev!.next = node.next;
    if (nextNode?.prev !== undefined) {
      nextNode.prev = node.prev;
    }
  };

  for (const [operation, operand] of input) {
    if (operation === "insert") insertNode(operand);
    if (operation === "delete") deleteNode(sentinelNode.next, operand);
  }

  const gen = <T>(node: MyabeLinkedListNode<T>, l: T[]): T[] => {
    if (node?.value === undefined) return l;
    l.push(node.value);
    return gen(node.next, l);
  };

  return gen<T>(sentinelNode.next, []);
}
