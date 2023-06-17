/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
export const sameFrequency = (first: number, second: number): boolean | null => {
  if (first <= 0 || second <= 0) return null

  const frequencyCounter: { [key: number]: number } = {}

  Array.from(first.toString()).forEach((num) => frequencyCounter[num] = (frequencyCounter[num] + 1) || 1)
  Array.from(second.toString()).forEach((num) => frequencyCounter[num] = (frequencyCounter[num] - 1) || 0)

  return !Object.values(frequencyCounter).some((item) => item !== 0)
}
