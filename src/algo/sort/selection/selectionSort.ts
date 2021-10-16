/**
 * Time Complexity: O(n^2)
 */
export const selectionSort = (input: number[]): number[] => {
  const arr = [...input]

  for (let i = 0; i < input.length; i++) {
    // Smallest item index
    let smallestItemIndex = i

    // Find the smallest element in the rest of array
    for (let j = i + 1; j < input.length; j++) {
      if (arr[j] < arr[smallestItemIndex]) {
        smallestItemIndex = j
      }
    }

    // If not the same item, then swap them and move smallest element to the beginning
    if (smallestItemIndex !== i) {
      [arr[i], arr[smallestItemIndex]] = [arr[smallestItemIndex], arr[i]]
    }
  }

  return arr
}
