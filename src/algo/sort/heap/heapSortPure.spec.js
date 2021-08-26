import { heapSort } from "./heapSortPure"

describe("Algo: Heap Sort with Vanilla JS", () => {
  it("works", () => {
    expect(heapSort([2, 4, 7, 1])).toStrictEqual([1, 2, 4, 7])
    expect(heapSort([1, 8, 9, 3])).toStrictEqual([1, 3, 8, 9])
    expect(heapSort([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5])
  })
})
