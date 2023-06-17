import { maxSubarraySum } from "./maxSubarraySum"

/**
 * Accepts an array of integers and n
 * Should calculate the max sum of n consecutive elements in the array
 * Return null if no elements
 */

describe("Max subarray sum function", () => {
  it("works", () => {
    expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)).toBe(10)
    expect(maxSubarraySum([4, 2, 1, 6], 1)).toBe(6)
    expect(maxSubarraySum([4, 2, 1, 6, 2], 4)).toBe(13)
    expect(maxSubarraySum([100, 200, 300, 400], 2)).toBe(700)
    expect(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39)
    expect(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)).toBe(5)
    expect(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)).toBe(5)
    expect(maxSubarraySum([], 4)).toBeNull()
    expect(maxSubarraySum([2, 3], 3)).toBeNull()
  })
})