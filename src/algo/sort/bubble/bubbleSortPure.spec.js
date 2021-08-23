import { bubbleSort } from "./bubbleSortPure"

describe("Algo: Bubble Sort with Vanilla JS", () => {
  it("works", () => {
    expect(bubbleSort([2, 4, 7, 1])).toStrictEqual([1, 2, 4, 7])
    expect(bubbleSort([1, 8, 9, 3])).toStrictEqual([1, 3, 8, 9])
    expect(bubbleSort([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5])
  })
})
