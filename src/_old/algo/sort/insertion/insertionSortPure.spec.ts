import { insertionSort } from "./insertionSortPure"

describe("Algo: Insertion Sort with Vanilla JS", () => {
  it("works", () => {
    expect(insertionSort([2, 4, 7, 1])).toStrictEqual([1, 2, 4, 7])
    expect(insertionSort([1, 8, 9, 3])).toStrictEqual([1, 3, 8, 9])
    expect(insertionSort([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5])
  })
})
