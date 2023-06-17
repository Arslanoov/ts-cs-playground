/**
 * @param {number[]} arr
 */
function mergeSort(arr) {
  if (arr.length <= 1) return arr

  const middle = Math.floor(arr.length / 2)

  let arr1 = arr.slice(0, middle)
  let arr2 = arr.slice(middle)

  mergeSort(arr1)
  mergeSort(arr2)

  let left = 0
  let right = 0

  while (left < arr1.length || right < arr2.length) {
    if (arr2.length === right || arr1[left] <= arr2[right]) {
      arr[left + right] = arr1[left]
      left++
    } else {
      arr[left + right] = arr2[right]
      right++
    }
  }
}