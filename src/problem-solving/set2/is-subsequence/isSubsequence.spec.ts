import { isSubsequence } from "./isSubsequence"

/**
 * Should check is second string contains characters from first string (with correct order)
 */

describe("Is subsequence function", () => {
  it("works", () => {
    expect(isSubsequence("hello", "hello world")).toBe(true)
    expect(isSubsequence("sing", "string")).toBe(true)
    expect(isSubsequence("abc", "abracadabra")).toBe(true)
    expect(isSubsequence("abc", "acb")).toBe(false)
  })
})