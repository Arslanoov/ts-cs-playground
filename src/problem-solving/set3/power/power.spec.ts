import { power } from "./power"

/**
 * Should return the power of the base to the exponent (for positive numbers)
 */

describe("Power function", () => {
  it("works", () => {
    expect(power(2, -1)).toBeNull()
    expect(power(2, 0)).toBe(1)
    expect(power(2, 2)).toBe(4)
    expect(power(2, 4)).toBe(16)
  })
})
