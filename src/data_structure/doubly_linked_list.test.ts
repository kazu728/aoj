import { main } from './doubly_linked_list';

const input = `7\ninsert 5\ninsert 2\ninsert 3\ninsert 1\ndelete 3\ninsert 6\ndelete 5`;

test('test', () => {
  main(input);
});
