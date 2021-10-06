import { maxSubarraySum } from "./maxSubarraySum"

/**
 * Accepts an array of integers and n
 * Should calculate the max sum of n consecutive elements in the array
 * Return null if no elements
 */

describe("Max subarray sum function", () => {
  it("works", () => {
    expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)).toBe(10)
    expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)).toBe(17)
    expect(maxSubarraySum([4, 2, 1, 6], 1)).toBe(6)
    expect(maxSubarraySum([4, 2, 1, 6, 2], 4)).toBe(13)
    expect(maxSubarraySum([], 4)).toBeNull()
  })
})