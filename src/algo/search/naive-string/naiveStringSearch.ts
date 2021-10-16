/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
export const naiveStringSearch = (input: string, substring: string): number => {
  if (input.length < substring.length) return 0

  let count: number = 0

  let stringWindow = ""
  for (let i = 0; i < substring.length; i++) {
    stringWindow = `${stringWindow}${input[i]}`
  }

  for (let j = 0; j < input.length - stringWindow.length + 1; j++) {
    if (stringWindow === substring) {
      count++
    }

    stringWindow = `${stringWindow.substring(1)}${input[j + stringWindow.length]}`
  }

  return count
}
