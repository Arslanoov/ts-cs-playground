/**
 * 1. Understand the problem
 * Can I restate the problem with my own words?
 * - Function that checks is second array (argument) has the same values in power of two of first array (argument)
 * What are the inputs that go into the problem?
 * - First and second array
 * What the output that should come from the solution of the problem?
 * - Boolean
 * Do I have enough information to solve the problem?
 * - Yes
 */

/**
 * 2. Explore the examples
 */

/**
 * 3. The steps I need to take
 */

/**
 * 4. Solve and simplify
 * Inefficient solution without frequency check, first came in mind
 * Array.prototype.includes - O(n^2)
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */
export const sameFirstTry = (first: number[], second: number[]): boolean => {
  first.forEach((item) => {
    // Check is first array item in power of two contains in second array
    if (!second.includes(item ** 2)) return false
  })

  return true
}

/**
 * 5. Look back and refactor
 */

/**
 * More efficient solution with frequency check
 * Frequency counter pattern
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
export const sameSecondTry = (first: number[], second: number[]): boolean => {
  const frequency: { [key: number]: number } = {}
  // Create object with frequency of first array items in power of two
  // O(n)
  first.forEach((item) => frequency[item ** 2] = (frequency[item] + 1) || 1)

  // Reduce frequency object with second array
  // O(n)
  second.forEach((item) => {
    if (!frequency[item] || frequency[item] < 1) {
      return false
    }

    frequency[item]--
  })

  // Check is all key-value pairs in frequency object are 0
  // Object.values() - O(n)
  // Array.prototype.some() - O(n)
  return !Object.values(frequency).some((item) => item !== 0)
}

/**
 * 5. Look back and refactor
 */

/**
 * Solution with more checks, more efficient
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
export const same = (first: number[], second: number[]): boolean => {
  // Immediately return false if inputs have different length
  if (first.length !== second.length) return false

  const frequency: { [key: number]: number } = {}
  // Create object with frequency of first array items in power of two
  // O(n)
  first.forEach((item) => frequency[item ** 2] = (frequency[item] + 1) || 1)

  // Reduce frequency object with second array
  // O(n)
  second.forEach((item) => {
    if (!frequency[item] || frequency[item] < 1) {
      return false
    }

    frequency[item]--
  })

  // Check is all key-value pairs in frequency object are 0
  // Object.values() - O(n)
  // Array.prototype.some() - O(n)
  return !Object.values(frequency).some((item) => item !== 0)
}
