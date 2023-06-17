import { same } from "./same"

/**
 * Accepts two arrays
 * Should return true if every value in the array has it's corresponding value squared in the second
 * array. The frequency of items must be the same.
 */

describe("Same function", () => {
  it("works", () => {
    expect(same([1, 2, 3], [4, 1, 9])).toBe(true)
    expect(same([1, 2, 3], [1, 9])).toBe(false)
    expect(same([1, 2, 1], [4, 4, 1])).toBe(false)

    expect(same([2, 3, 7, 1], [9, 49, 1, 4])).toBe(true)
    expect(same([4, 5, 6], [16, 25, 36])).toBe(true)
  })
})
