export const mergeArrays = (first: number[], second: number[]): number[] => {
  let left: number = 0
  let right: number = 0

  const arr: number[] = []

  while (left < first.length && right < second.length) {
    if (first[left] > second[right]) {
      arr.push(second[right])
      right++
    } else {
      arr.push(first[left])
      left++
    }
  }

  // Push remaining values, 2 variants

  /* while (left < first.length) {
    arr.push(first[left])
    left++
  }

  while (right < second.length) {
    arr.push(second[right])
    right++
  } */

  return arr
    .concat(first.slice(left))
    .concat(second.slice(right))
}

export const mergeSort = (input: number[]): number[] => {

}
