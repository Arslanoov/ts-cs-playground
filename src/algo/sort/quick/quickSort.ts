const compare = (a: number, b: number) => a - b

/**
 * Time Complexity: O(n log(n))
 */
export const quickSortNonInPlace = (input: number[]): number[] => {
  const arr = [...input]

  const pivot = arr.pop()
  const center = [pivot]

  const left: number[] = []
  const right: number[] = []

  // pop - O(1)
  // shift - O(n)
  while (arr.length !== 0) {
    const el = arr.pop()
    if (el < pivot) {
      left.push(el)
    } else if (el > pivot) {
      right.push(el)
    } else {
      center.push(el)
    }
  }

  const sortedLeft = left.sort(compare)
  const sortedRight = right.sort(compare)

  return sortedLeft.concat(center, sortedRight)
}
