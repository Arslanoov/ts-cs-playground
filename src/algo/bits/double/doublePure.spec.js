import { double } from "./doublePure"

describe("Algo: double with Vanilla JS", () => {
  it("works", () => {
    expect(double(0)).toBe(0)
    expect(double(2)).toBe(4)
    expect(double(4)).toBe(8)
    expect(double(5)).toBe(10)
    expect(double(9)).toBe(18)
    expect(double(100)).toBe(200)
    expect(double(168)).toBe(336)
  })
})
