import { quickSort } from "./quickSortPure"

describe("Algo: Quick Sort with Vanilla JS", () => {
  it("works", () => {
    expect(quickSort([2, 4, 7, 1])).toStrictEqual([1, 2, 4, 7])
    expect(quickSort([1, 8, 9, 3])).toStrictEqual([1, 3, 8, 9])
    expect(quickSort([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5])
  })
})
