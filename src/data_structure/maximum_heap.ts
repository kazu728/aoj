let H: number
let A: number[]

const maxHeapify = (i: number) => {
  const left = 2 * i
  const right = 2 * i + 1
  let largest: number

  left <= H && A[left] > A[i] ? (largest = left) : (largest = i)
  if (right <= H && A[right] > A[largest]) largest = right

  if (largest !== i) {
    ;[A[i], A[largest]] = [A[largest], A[i]]
    maxHeapify(largest)
  }
}

export function main(input: [number, number[]]) {
  ;[H, A] = input

  for (let i = H / 2; i >= 1; i--) {
    maxHeapify(i)
  }

  return A.filter((a, index) => index)
}
