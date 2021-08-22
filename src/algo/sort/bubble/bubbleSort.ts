// O(n^2) ( O(n) in best cases)
export const bubbleSort = (input: number[]): number[] => {
  // Pure func
  const arr = [...input]
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}
