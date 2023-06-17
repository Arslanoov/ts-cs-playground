import { countingSort } from "./countingSort"

describe("Algo: Counting Sort", () => {
  it("works", () => {
    expect(countingSort([2, 4, 7, 1])).toStrictEqual([1, 2, 4, 7])
    expect(countingSort([1, 8, 9, 3])).toStrictEqual([1, 3, 8, 9])
    expect(countingSort([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5])
  })
})
