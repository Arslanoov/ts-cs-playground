import { sumZero } from "./sumZero"

/**
 * Accepts a sorted array of integers
 * Find the first pair where sum is 0
 * Returns an array that includes both values that sum to zero or null if a pair doesn't exist
 */

describe("Sum zero function", () => {
  it("works", () => {
    expect(sumZero([-3, -2, -1, 0, 1, 2, 3])).toStrictEqual([-3, 3])
    expect(sumZero([-2, 0, 1, 3])).toBeNull()
    expect(sumZero([1, 2, 3])).toBeNull()
  })
})
