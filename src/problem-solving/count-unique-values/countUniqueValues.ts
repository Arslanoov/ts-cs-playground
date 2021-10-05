/**
 * 1. Understand the problem
 * Can I rephrase the problem with my own words?
 * - Return count of unique items in array
 * What are inputs that go into the problem?
 * - Sorted array of integers
 * What are the outputs that should come from the solution of the problem?
 * - Count of unique items
 * Do I have enough information to solve this problem?
 * - Yes
 */

/**
 * 2. Explore the examples
 */

/**
 * 3. Write the steps that I need to take
 * 4. Solve and simplify
 * 5. Refactor and go back
 */

/**
 * Solution with multiple pointers pattern (2 pointers)
 * Time Complexity - O(n)
 * Space Complexity - O(1)
 */
export const countUniqueValues = (input: number[]): number => {
  // Immediately return 0 if array is empty
  if (input.length === 0) return 0

  // Two pointers: the previous item and the unique items count (we can do this because array is sorted)
  let uniqueItemsCount: number = 0
  let prev: number | null = null

  for (let i = 0; i < input.length; i++) {
    if (input[i] !== prev) uniqueItemsCount++
    prev = input[i]
  }

  return uniqueItemsCount
}
