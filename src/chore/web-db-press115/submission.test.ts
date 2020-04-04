import { dfs } from './submission'

const N = 4
const K = 3

test('should ', () => {
  console.log(dfs(N, K, 1))

  expect(dfs(N, K, 1)).toEqual(10)
})
