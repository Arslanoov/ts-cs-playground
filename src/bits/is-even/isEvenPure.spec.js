import { isEven } from "./isEvenPure"

describe("Algo: isEven with Vanilla JS", () => {
  it("works", () => {
    expect(isEven(1)).toBe(false)
    expect(isEven(2)).toBe(true)
    expect(isEven(3)).toBe(false)
    expect(isEven(4)).toBe(true)
    expect(isEven(5)).toBe(false)
    expect(isEven(10)).toBe(true)
    expect(isEven(11)).toBe(false)
    expect(isEven(41567876)).toBe(true)
    expect(isEven(31415)).toBe(false)
  })
})
