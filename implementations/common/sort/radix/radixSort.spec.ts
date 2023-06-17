import { getDigit, getDigitsCount, getMostDigits, radixSort } from "./radixSort"

describe("Sort: Radix Sort", () => {
  test("get digit", () => {
    expect(getDigit(3726, 2)).toBe(7)
    expect(getDigit(102, 0)).toBe(2)
    expect(getDigit(174598754, 5)).toBe(5)
  })

  test("get digits count", () => {
    expect(getDigitsCount(3726)).toBe(4)
    expect(getDigitsCount(102)).toBe(3)
    expect(getDigitsCount(174598754)).toBe(9)
  })

  test("get most digits", () => {
    expect(getMostDigits([3, 131, 3726, 1944, 16])).toBe(4)
    expect(getMostDigits([102, 42, 715, 13, 4, 1])).toBe(3)
    expect(getMostDigits([43, 72565, 174598754, 17459875, 100, 1])).toBe(9)
  })

  test("sort", () => {
    expect(radixSort([2, 4, 7, 1])).toStrictEqual([1, 2, 4, 7])
    expect(radixSort([1, 8, 9, 3])).toStrictEqual([1, 3, 8, 9])
    expect(radixSort([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5])
    expect(radixSort([4, 89, 5, 1, 83, 54, 42, 1890, 221, 228]))
      .toStrictEqual([1, 4, 5, 42, 54, 83, 89, 221, 228, 1890])
  })
})
