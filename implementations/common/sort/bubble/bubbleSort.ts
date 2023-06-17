/**
 * Time Complexity: O(n^2)
 * Best Case: O(n)
 */
export const bubbleSort = (input: number[]): number[] => {
  const arr = [...input]
  let notSwapped: boolean = false

  for (let i = 0; i < arr.length; i++) {
    notSwapped = true
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        notSwapped = false
      }
    }

    if (notSwapped) break
  }

  return arr
}
