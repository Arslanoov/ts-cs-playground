type Value = any

/**
 * Solution with array slice
 */
export const callbackRecursiveSlice = (array: Value[], callback: (val: Value) => boolean): boolean => {
  if (array.length === 0) return false
  if (callback(array[0]) === true) return true

  return callbackRecursiveSlice(array.slice(1), callback)
}

/**
 * Solution with index
 */
export const callbackRecursiveIndex = (
  array: Value[],
  callback: (val: Value) => boolean,
  index: number = 0
): boolean => {
  if (index === array.length) return false
  if (callback(array[index]) === true) return true

  return callbackRecursiveIndex(array, callback, index + 1)
}
