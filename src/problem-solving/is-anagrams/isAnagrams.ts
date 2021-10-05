/**
 * 1. Understand the problem
 * Can I restate the problem with my own words?
 * - Write a function that checks two words for being anagrams (have the same chars in different order)
 * What are inputs that go into the problem?
 * - Two strings
 * What the output that should come from the solution of the problem?
 * - Boolean
 * Do I have enough information for this problem?
 * - Yes
 */

/**
 * 2. Explore the examples
 */

/**
 * 3. The steps that I need to take
 * 4. Solve and simplify
 * 5. Look back and refactor
 */

/**
 * Solution with frequency counter pattern
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
export const isAnagrams = (first: string, second: string): boolean => {
  // Immediately return false if string length are different
  if (first.length !== second.length) return false

  // Create an object of first string frequencies
  const firstStringFrequency: { [key: number]: number } = {}
  Array.from(first).forEach((char) => firstStringFrequency[char] = (firstStringFrequency[char] + 1) || 1)

  // Create an object of second string frequencies
  // We also can reduce first string frequency instead of this (as in "same" function)
  const secondStringFrequency: { [key: number]: number } = {}
  Array.from(second).forEach((char) => secondStringFrequency[char] = (secondStringFrequency[char] + 1) || 1)

  // Check objects values equality
  return !((Object.keys(firstStringFrequency) as number[]).some(
    (key: number) => firstStringFrequency[key] !== secondStringFrequency[key]
  ))
}
