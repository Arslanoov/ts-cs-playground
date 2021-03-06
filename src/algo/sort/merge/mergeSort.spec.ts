import { mergeSort, mergeArrays } from "./mergeSort"

describe("Sort: Merge Sort", () => {
  test("merge", () => {
    expect(mergeArrays([1, 2, 4, 7], [0, 3, 5, 8])).toStrictEqual([0, 1, 2, 3, 4, 5, 7, 8])
    expect(mergeArrays([10, 100, 101, 102], [99, 103, 104, 106]))
      .toStrictEqual([10, 99, 100, 101, 102, 103, 104, 106])
  })

  test("sort", () => {
    expect(mergeSort([2, 4, 7, 1])).toStrictEqual([1, 2, 4, 7])
    expect(mergeSort([1, 8, 9, 3])).toStrictEqual([1, 3, 8, 9])
    expect(mergeSort([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5])
    expect(mergeSort([4, 89, 5, 1, 83, 54, 42, 1890, 221, 228]))
      .toStrictEqual([1, 4, 5, 42, 54, 83, 89, 221, 228, 1890])
  })
})
