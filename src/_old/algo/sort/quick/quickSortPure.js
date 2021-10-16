// O(n log(n))
export const quickSort = (input) => {
  const arr = [...input]
  const left = []
  const right = []

  const first = arr.shift()
  const center = [first]

  while (arr.length) {
    const current = arr.shift()
    if (current < first) {
      left.push(current)
    } else if (current === first) {
      center.push(current)
    } else if (current > first) {
      right.push(current)
    }
  }

  const leftSorted = left.sort()
  const rightSorted = right.sort()

  return leftSorted.concat(center, rightSorted)
}
