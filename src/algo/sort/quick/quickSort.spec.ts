import { quickSortNonInPlace, quickSortInPlace } from "./quickSort"

describe("Sort: Merge Sort", () => {
  test("non in place", () => {
    expect(quickSortNonInPlace([2, 4, 7, 1])).toStrictEqual([1, 2, 4, 7])
    expect(quickSortNonInPlace([1, 8, 9, 3])).toStrictEqual([1, 3, 8, 9])
    expect(quickSortNonInPlace([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5])
    expect(quickSortNonInPlace([4, 89, 5, 1, 83, 54, 42, 1890, 221, 228]))
      .toStrictEqual([1, 4, 5, 42, 54, 83, 89, 221, 228, 1890])
  })

  test("in place", () => {
    expect(quickSortInPlace([2, 4, 7, 1])).toStrictEqual([1, 2, 4, 7])
    expect(quickSortInPlace([1, 8, 9, 3])).toStrictEqual([1, 3, 8, 9])
    expect(quickSortInPlace([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5])
    expect(quickSortInPlace([4, 89, 5, 1, 83, 54, 42, 1890, 221, 228]))
      .toStrictEqual([1, 4, 5, 42, 54, 83, 89, 221, 228, 1890])
  })
})
