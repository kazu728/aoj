import { Node } from './node';

let length = 0;
const list: Node[] = [];

// @ts-ignore
const init = () => (list[0] = new Node(null, null, null));

const insert = (operand: number) => {
  const swap = list[0].next;
  list[++length] = new Node(operand, 0, swap);
  list[0].setNext(length);
  swap && list[swap].setprev(length);
};

const deleteByKey = (operand: number) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i].key !== operand) continue;
    list[list[i].prev].setNext(list[i].next);
  }
};

export const main = (input: string) => {
  const [_l, ...array] = input.split('\n');
  init();
  for (let i = 0; i < array.length; i++) {
    const [order, operand] = array[i].split(' ');
    order === 'insert' && insert(parseInt(operand));
    order === 'delete' && deleteByKey(parseInt(operand));
  }
  console.log(list);

  return list;
};
