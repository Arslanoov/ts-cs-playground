import { findLeastCommonMultiple } from "./findLeastCommonMultiplePure"

describe("Algo: find least common multiple with Vanilla JS", () => {
  it("works", () => {
    expect(findLeastCommonMultiple(0, 0)).toBe(0)
    expect(findLeastCommonMultiple(1, 0)).toBe(0)
    expect(findLeastCommonMultiple(0, 1)).toBe(0)
    expect(findLeastCommonMultiple(7, 2)).toBe(14)
    expect(findLeastCommonMultiple(3, 5)).toBe(15)
    expect(findLeastCommonMultiple(7, 3)).toBe(21)
    expect(findLeastCommonMultiple(-9, -18)).toBe(18)
    expect(findLeastCommonMultiple(-7, -9)).toBe(63)
    expect(findLeastCommonMultiple(-7, 9)).toBe(63)
    expect(findLeastCommonMultiple(1000, 2)).toBe(1000)
  })
})
