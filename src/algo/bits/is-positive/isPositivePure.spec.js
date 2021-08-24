import { isPositive } from "./isPositivePure"

describe("Algo: isPositive with Vanilla JS", () => {
  it("works", () => {
    expect(isPositive(0)).toBe(false)
    expect(isPositive(1)).toBe(true)
    expect(isPositive(2)).toBe(true)
    expect(isPositive(-2)).toBe(false)
    expect(isPositive(-102)).toBe(false)
    expect(isPositive(10002)).toBe(true)
  })
})
