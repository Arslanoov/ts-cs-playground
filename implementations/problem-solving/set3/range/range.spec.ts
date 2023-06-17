import { range } from "./range"

describe("Range function", () => {
  it("works", () => {
    expect(range(-1)).toBeNull()
    expect(range(6)).toBe(21)
    expect(range(10)).toBe(55)
    expect(range(11)).toBe(66)
  })
})
