/**
 * Time Complexity - O(n)
 * Space Complexity - O(n)
 */
export const findLongestSubstring = (string: string): number => {
  if (string.length === 0) return 0

  let chars: { [key: string]: number } = {}
  let len: number = 0
  let maxLen: number = 0

  for (let i = 0; i < string.length; i++) {
    if (chars[string[i]]) {
      len = Math.max(len, chars[string[i]])
    }

    maxLen = Math.max(maxLen, i - len + 1)
    chars[string[i]] = i + 1
  }

  return maxLen
}
