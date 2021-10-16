import { isPositive } from "./isPositive"

describe("Algo: isPositive", () => {
  it("works", () => {
    expect(isPositive(0)).toBe(false)
    expect(isPositive(1)).toBe(true)
    expect(isPositive(2)).toBe(true)
    expect(isPositive(-2)).toBe(false)
    expect(isPositive(-102)).toBe(false)
    expect(isPositive(10002)).toBe(true)
  })
})
