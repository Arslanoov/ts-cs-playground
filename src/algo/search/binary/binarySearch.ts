/**
 * Time Complexity: O(log(n))
 */
export const binarySearch = (input: number[], value: number): number => {
  let left: number = 0
  let right: number = input.length - 1

  while (left <= right) {
    let middle: number = left + Math.floor((right - left) / 2)
    if (input[middle] === value) {
      return middle
    } else if (input[middle] < value) {
      left = middle + 1
    } else {
      right = middle - 1
    }
  }

  return -1
}
