// O(n log(n))
export const mergeSorted = (first: number[], second: number[]): number[] => {
  let left = 0
  let right = 0
  const output: number[] = []

  while (left < first.length && right < second.length) {
    let min: number | null = null
    if (second[right] > first[left]) {
      min = first[left]
      left++
    } else {
      min = second[right]
      right++
    }
    output.push(min)
  }

  return output.concat(first.slice(left)).concat(second.slice(right))
}

export const mergeSort = (arr: number[]): number[] => {
  if (arr.length <= 1) return arr

  const middle = Math.floor(arr.length / 2)
  const firstArr = mergeSort(arr.slice(0, middle))
  const secondArr = mergeSort(arr.slice(middle, arr.length))

  return mergeSorted(firstArr, secondArr)
}
