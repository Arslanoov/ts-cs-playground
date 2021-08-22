import { linearSearchFirst, linearSearchAll } from "./linearSearchPure"

describe("Algo: Linear Search First with Vanilla JS", () => {
  it("works", () => {
    const arr = [5, 6, 63, 1471, 53, 624, 5]
    expect(linearSearchFirst(arr, 5)).toBe(0)
    expect(linearSearchFirst(arr, 1471)).toBe(3)
    expect(linearSearchFirst(arr, 42)).toBe(-1)
  })
})

describe("Algo: Linear Search All with Vanilla JS", () => {
  it("works", () => {
    const arr = [3, 74, 363, 527, 13, 624, 3]
    expect(linearSearchAll(arr, 3)).toStrictEqual([0, 6])
    expect(linearSearchAll(arr, 527)).toStrictEqual([3])
    expect(linearSearchAll(arr, 42)).toStrictEqual([])
  })
})
