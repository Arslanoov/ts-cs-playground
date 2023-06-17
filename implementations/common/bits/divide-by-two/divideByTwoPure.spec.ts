import { divideByTwo } from "./divideByTwo"

describe("Algo: divide by two with Vanilla JS", () => {
  it("works", () => {
    expect(divideByTwo(4)).toBe(2)
    expect(divideByTwo(6)).toBe(3)
    expect(divideByTwo(10)).toBe(5)
    expect(divideByTwo(-10)).toBe(-5)
  })
})
