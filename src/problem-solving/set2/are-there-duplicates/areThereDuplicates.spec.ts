import { areThereDuplicates, areThereDuplicateNumbers } from "./areThereDuplicates"

/**
 * Checks is there any duplicates in arguments
 */

describe("Are there duplicated function", () => {
  it("works", () => {
    expect(areThereDuplicates(1, 2, 3)).toBe(false)
    expect(areThereDuplicates(1, 2, 2)).toBe(true)
    expect(areThereDuplicates("a", "b", "c", "a")).toBe(true)
  })

  it("works with multiple pointers solution", () => {
    expect(areThereDuplicateNumbers(1, 2, 3)).toBe(false)
    expect(areThereDuplicateNumbers(1, 2, 2)).toBe(true)
    expect(areThereDuplicateNumbers(4, 1, 2, 3)).toBe(false)
    expect(areThereDuplicateNumbers(4, 1, 2, 3, 4, 7)).toBe(false)
  })
})