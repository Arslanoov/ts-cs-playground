/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
function flat(arr, depth = 1) {
  const res = []

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && depth > 0) {
      res.push(...flat(arr[i], depth - 1))
    } else {
      res.push(arr[i])
    }
  }

  return res
}