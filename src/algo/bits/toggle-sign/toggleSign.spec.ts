import { toggleSign } from "./toggleSign"

describe("Algo: toggle sign", () => {
  it("works", () => {
    expect(toggleSign(0)).toBe(0)
    expect(toggleSign(1)).toBe(-1)
    expect(toggleSign(2)).toBe(-2)
    expect(toggleSign(3)).toBe(-3)
    expect(toggleSign(10)).toBe(-10)
  })
})
