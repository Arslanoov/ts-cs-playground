import { mergeSort } from "./mergeSortPure"

describe("Algo: Merge Sort with Vanilla JS", () => {
  it("works", () => {
    expect(mergeSort([2, 4, 7, 1])).toStrictEqual([1, 2, 4, 7])
    expect(mergeSort([1, 8, 9, 3])).toStrictEqual([1, 3, 8, 9])
    expect(mergeSort([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5])
  })
})
