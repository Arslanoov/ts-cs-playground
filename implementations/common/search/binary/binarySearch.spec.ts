import { binarySearch } from "./binarySearch"

describe("Algo: Linear Search First", () => {
  it("works", () => {
    const arr = [5, 6, 63, 1471, 53, 624, 5]
    expect(binarySearch(arr, 5)).toBe(0)
    expect(binarySearch(arr, 1471)).toBe(3)
    expect(binarySearch(arr, 42)).toBe(-1)
  })
})
