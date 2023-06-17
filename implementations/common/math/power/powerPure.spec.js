import { power } from "./powerPure"

describe("Algo: power with Vanilla JS", () => {
  it("works", () => {
    expect(power(3, 0)).toBe(1)
    expect(power(3, 1)).toBe(3)
    expect(power(5, 2)).toBe(25)
    expect(power(3, 3)).toBe(27)
    expect(power(2, 10)).toBe(1024)
  })
})
