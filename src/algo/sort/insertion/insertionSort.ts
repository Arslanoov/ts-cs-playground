/**
 * Time Complexity: O(n^2)
 * Best Case: O(n)
 */
export const insertionSort = (input: number[]): number[] => {
  const arr = [...input]

  for (let i = 0; i < input.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }

    /*
      Solution with var and additional variable

      let current = arr[i]
      for (var j = i - 1; j >= 0 && arr[j] > current; j--) {
        arr[j + 1] = arr[j]
      }

      arr[j + 1] = current
    */
  }

  return arr
}
