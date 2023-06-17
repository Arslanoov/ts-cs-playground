/**
 * Time Complexity - O(n)
 * Space Complexity - O(1)
 */
export const isSubsequence = (first: string, second: string): boolean => {
  let firstIndex: number = 0

  if (first.length === 0) return true

  for (let secondIndex = 0; secondIndex < second.length; secondIndex++) {
    if (first[firstIndex] === second[secondIndex]) firstIndex++
    if (firstIndex === first.length) return true
  }

  return false
}