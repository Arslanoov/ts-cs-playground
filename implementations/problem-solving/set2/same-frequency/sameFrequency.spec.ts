import { sameFrequency } from "./sameFrequency"

/**
 * Should check if two positive numbers have the same digit frequency
 */

describe("Same frequency function", () => {
  it("works", () => {
    expect(sameFrequency(182, 281)).toBe(true)
    expect(sameFrequency(34, 14)).toBe(false)
    expect(sameFrequency(3589578, 5879385)).toBe(true)
    expect(sameFrequency(22, 222)).toBe(false)
  })
})