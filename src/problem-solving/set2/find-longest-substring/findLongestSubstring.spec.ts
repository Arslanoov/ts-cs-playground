import { findLongestSubstring } from "./findLongestSubstring"

/**
 * Find the longest substring that has only distinct chars
 */

describe("Find longest substring function", () => {
  it("works", () => {
    expect(findLongestSubstring("")).toBe(0)
    expect(findLongestSubstring("rithmschool")).toBe(7)
    expect(findLongestSubstring("thisisawesome")).toBe(6)
    expect(findLongestSubstring("thecatinthehat")).toBe(7)
    expect(findLongestSubstring("bbbbbb")).toBe(1)
    expect(findLongestSubstring("longestsubstring")).toBe(8)
    expect(findLongestSubstring("thisishowwedoit")).toBe(6)
  })
})
