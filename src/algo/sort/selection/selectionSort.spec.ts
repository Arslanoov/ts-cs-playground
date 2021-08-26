import { selectionSort } from "./selectionSort"

describe("Algo: Selection Sort", () => {
  it("works", () => {
    expect(selectionSort([2, 4, 7, 1])).toStrictEqual([1, 2, 4, 7])
    expect(selectionSort([1, 8, 9, 3])).toStrictEqual([1, 3, 8, 9])
    expect(selectionSort([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5])
  })
})
