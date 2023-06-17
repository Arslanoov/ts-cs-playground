/**
 * 1. Understand the problem
 * Can I restate problem with my own words?
 * - Write function that returns max sum of array pair (with length of n)
 * What are the inputs that go into the problem?
 * - Array of integers and pair length
 * What are the outputs that should come from the solution of the problem?
 * - Max pair sum
 * Does I have enough information to solve this problem?
 * - Yes
 */

/**
 * 2. Explore the examples
 */

/**
 * 3. Write the steps I need to take
 * 4. Solve and simplify
 * 5. Get back and refactor
 */

/**
 * Efficient solution with window sliding pattern and pointer variables
 * Time Complexity - O(n)
 * Space Complexity - O(1)
 */
export const maxSubarraySum = (input: number[], n: number): number | null => {
  // Immediately return null if inputs are incorrect
  if (input.length === 0 || n < 1 || input.length < n) return null

  // Pointer variables
  let maxSum: number = 0

  // Getting default max sum value (first window)
  for (let i = 0; i < n; i++) {
    maxSum += input[i]
  }

  let newSum = maxSum
  // Go through loop
  for (let windowStart = 0; windowStart < input.length - n + 1; windowStart++) {
    // Calculate window sum
    newSum = newSum + input[windowStart + n] - input[windowStart]

    // Check is window sum is max
    if (newSum > maxSum) {
      maxSum = newSum
    }
  }

  return maxSum
}
