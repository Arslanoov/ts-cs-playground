// O(n^2)
export const insertionSort = (input: number[]): number[] => {
  const arr = [...input]
  for (let i = 1; i < input.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j - 1] > arr[j]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
      }
    }
  }
  return arr
}
