// O(log(n))
export const binarySearch = (arr, item) => {
  let start = 0
  let end = arr.length - 1

  while (start <= end) {
    let middle = start + Math.floor((end - start) / 2)
    if (arr[middle] === item) return middle
    arr[middle] > item ? end = middle - 1 : start = middle + 1
  }

  return -1
}
