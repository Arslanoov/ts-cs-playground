// O(log(log(n))
export const interpolationSearch = (arr, item) => {
  let start = 0
  let end = arr.length - 1

  while (start <= end) {
    const range = arr[end] - arr[start]
    const index = end - start
    const value = item - arr[start]

    if (value < 0) return -1

    if (value === 0) {
      return arr[start] === item ? start : -1
    }

    const middle = start + Math.floor((value * index) / range)
    if (arr[middle] === item) return middle

    arr[middle] > item ? end = middle - 1 : start = middle + 1
  }

  return -1
}
