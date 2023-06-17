/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
export const averagePair = (input: number[], n: number): boolean => {
  if (input.length < 2) return false

  // pointers
  let start: number = 0
  let end: number = input.length - 1

  while (start < end) {
    const average: number = (input[start] + input[end]) / 2
    if (average === n) {
      return true
    } else if (average > n) {
      end--
    } else {
      start++
    }
  }

  return false
}
