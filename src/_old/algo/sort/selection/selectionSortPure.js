// O(n^2)
export const selectionSort = (input) => {
  const arr = [...input]
  for (let i = 0; i < arr.length - 1; i++) {
    // Find min element in the rest of array
    let min = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }

    // If j !== i
    if (min !== i) {
      [arr[min], arr[i]] = [arr[i], arr[min]]
    }
  }

  return arr
}
