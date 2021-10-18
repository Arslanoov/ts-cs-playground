import { shellSort } from "./shellSortPure"

describe("Algo: Shell Sort with Vanilla JS", () => {
  it("works", () => {
    expect(shellSort([2, 4, 7, 1])).toStrictEqual([1, 2, 4, 7])
    expect(shellSort([1, 8, 9, 3])).toStrictEqual([1, 3, 8, 9])
    expect(shellSort([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5])
  })
})
