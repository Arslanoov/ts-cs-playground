// O(sqrt(n))
export const jumpSearch = (arr: number[], item: number): number => {
  const size = arr.length
  const jumpSize = Math.floor(Math.sqrt(size))

  let start = 0
  let end = jumpSize
  while (item > arr[Math.min(end, size) - 1]) {
    start = end
    end += jumpSize
    if (start > size) return -1
  }

  let current = start
  while (current < Math.min(end, size)) {
    if (arr[current] === item) return current
    current++
  }

  return -1
}
