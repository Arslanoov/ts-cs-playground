import { radixSortNumbers, radixSortChars } from "./radixSortPure"

describe("Algo: Radix Sort with Vanilla JS", () => {
  it("works with numbers", () => {
    expect(radixSortNumbers([2, 4, 7, 1])).toStrictEqual([1, 2, 4, 7])
    expect(radixSortNumbers([1, 8, 9, 3])).toStrictEqual([1, 3, 8, 9])
    expect(radixSortNumbers([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5])
  })

  it("works with chars", () => {
    expect(radixSortChars(['aa', 'q', 'bbbb', 'ccc'])).toEqual(['aa', 'bbbb', 'ccc', 'q'])
  })
})
