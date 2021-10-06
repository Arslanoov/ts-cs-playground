/**
 * 1. Understand the problem
 * Can I restate the problem with my own words?
 * - A function that finds pair with sum of zero (or return null)
 * What are the inputs that go into problem?
 * - Array of integers
 * What the output that should came from the solution of the problem?
 * - Found pair or null
 * Do I have enough information to solve the problem?
 * - Yes
 */

/**
 * 2. Explore the examples
 */
export const sumZeroExample = (input: number[]): [number, number] | null => {
  // The beginning pointer
  let left: number = 0
  // The ending pointer
  let right: number = input.length - 1

  while (left < right) {
    let sum: number = input[left] + input[right]
    if (sum === 0) {
      // if pair found
      return [input[left], input[right]]
    } else if (sum < 0) {
      left++
    } else {
      right--
    }
  }

  return null
}

/**
 * 3. The steps I need to take
 * Multiple pointers pattern (with 2 pointers)
 */

/**
 * 4. Solve or simplify
 * Inefficient solution, nested loop never breaks
 * Time Complexity - O(n^2)
 * Space Complexity - O(1)
 */
export const sumZeroFirstTry = (input: number[]): [number, number] | null => {
  let result: [number, number] | null = null

  // Nested loop
  input.forEach((item) => input.forEach((inputItem) => {
    if (inputItem + item === 0 && inputItem !== item) result = [item, inputItem]
  }))

  if (result) {
    result.sort()
  }

  return result
}

/**
 * 5. Look back and refactor
 * Multiple pointers pattern (with 3 pointers)
 * Time complexity - O(n)
 * Space complexity = O(1)
 */
export const sumZero = (input: number[]): [number, number] | null => {
  // pointer vars that keeps position information
  let prev: number | null = null
  let current: number | null = null
  let next: number | null = null

  // go through an array and check elements quality with Math.abs(a) === Math.abs(a) or a + -a = 0
  for (let i = 0; i < input.length; i++) {
    prev = input[input.length - i - 2]
    current = input[input.length - i - 1]
    next = input[input.length - i]

    if (input[i] + prev === 0 && input[i] !== prev) {
      return [input[i], prev]
    }

    if (input[i] + current === 0 && input[i] !== current) {
      return [input[i], current]
    }

    if (input[i] + next === 0 && input[i] !== next) {
      return [input[i], next]
    }
  }

  return null
}
