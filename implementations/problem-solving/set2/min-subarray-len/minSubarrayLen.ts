/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
export const minSubarrayLen = (input: number[], n: number): number => {
  if (input.length === 0) return 0

  let start: number = 0
  let end: number = 0
  let windowSum: number = 0
  let minLen: number = Infinity

  while (start < input.length) {
    if (windowSum < n && end < input.length) {
      windowSum += input[end]
      end++
    } else if (windowSum >= n) {
      windowSum -= input[start]
      minLen = Math.min(minLen, end - start)
      start++
    } else break
  }

  return minLen === Infinity ? 0 : minLen
}
