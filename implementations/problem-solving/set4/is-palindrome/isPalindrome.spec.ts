import { isPalindrome } from "./isPalindrome"

/**
 * Should check is string is palindrome
 */

describe("Is palindrome function", () => {
  it("works", () => {
    expect(isPalindrome("awesome")).toBe(false)
    expect(isPalindrome("foobar")).toBe(false)
    expect(isPalindrome("tacocat")).toBe(true)
    expect(isPalindrome("tacocat")).toBe(true)
    expect(isPalindrome("amanaplanacanalpanama")).toBe(true)
    expect(isPalindrome("amanaplanacanalpandemonium")).toBe(false)
  })
})
