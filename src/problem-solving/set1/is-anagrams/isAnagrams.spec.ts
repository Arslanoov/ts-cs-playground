import { isAnagrams } from "./isAnagrams"

/**
 * Checks two strings for being anagrams
 */

describe("Is anagrams function", () => {
  it("works", () => {
    expect(isAnagrams("", "")).toBe(true)
    expect(isAnagrams("aaz", "zza")).toBe(false)
    expect(isAnagrams("anagram", "nagaram")).toBe(true)
    expect(isAnagrams("rat", "car")).toBe(false)
    expect(isAnagrams("awesome", "awesom")).toBe(false)
    expect(isAnagrams("qwerty", "qeywrt")).toBe(true)
    expect(isAnagrams("texttwisttime", "timetwisttext")).toBe(true)
    expect(isAnagrams("cinema", "iceman")).toBe(true)
  })
})