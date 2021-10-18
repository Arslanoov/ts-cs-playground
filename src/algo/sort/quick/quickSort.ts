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

const quickSortInPlacePivot = (input: number[], start: number = 0, end: number = input.length - 1): number => {
  const swap = (first: number, second: number) => [input[first], input[second]] = [input[second], input[first]]
  const pivot = input[start]

  let swapIndex: number = start

  for (let i = start + 1; i <= end; i++) {
    // To the right
    if (input[i] < pivot) {
      swapIndex++
      swap(swapIndex, i)
    }
  }

  swap(swapIndex, start)

  return swapIndex
}

export const quickSortInPlace = (input: number[], start: number = 0, end: number = input.length - 1) => {
  if (start < end) {
    const pivot = quickSortInPlacePivot(input, start, end)
    quickSortInPlace(input, start, pivot - 1)
    quickSortInPlace(input, pivot + 1, end)
  }

  return input
}
