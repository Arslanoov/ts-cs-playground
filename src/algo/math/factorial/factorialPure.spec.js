import { fac, facIterative } from "./factorialPure";

describe("Algo: Factorial with Vanilla JS", () => {
  it("works with recursive method", () => {
    expect(fac(-1)).toBe(1)
    expect(fac(0)).toBe(1)
    expect(fac(1)).toBe(1)
    expect(fac(2)).toBe(2)
    expect(fac(3)).toBe(6)
    expect(fac(4)).toBe(24)
    expect(fac(5)).toBe(120)
  })

  it("works with iterative method", () => {
    expect(facIterative(-1)).toBe(1)
    expect(facIterative(0)).toBe(1)
    expect(facIterative(1)).toBe(1)
    expect(facIterative(2)).toBe(2)
    expect(facIterative(3)).toBe(6)
    expect(facIterative(4)).toBe(24)
    expect(facIterative(5)).toBe(120)
  })
})
