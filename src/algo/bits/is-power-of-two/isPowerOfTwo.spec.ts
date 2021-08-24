import { isPowerOfTwo } from "./isPowerOfTwo"

describe("Algo: is power of two", () => {
  it("works", () => {
    expect(isPowerOfTwo(1)).toBe(true)
    expect(isPowerOfTwo(2)).toBe(true)
    expect(isPowerOfTwo(4)).toBe(true)
    expect(isPowerOfTwo(8)).toBe(true)
    expect(isPowerOfTwo(16)).toBe(true)

    expect(isPowerOfTwo(3)).toBe(false)
    expect(isPowerOfTwo(7)).toBe(false)
    expect(isPowerOfTwo(9)).toBe(false)
    expect(isPowerOfTwo(21)).toBe(false)
    expect(isPowerOfTwo(33)).toBe(false)
  })
})
