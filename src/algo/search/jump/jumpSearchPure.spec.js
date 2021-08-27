import { jumpSearch } from "./jumpSearchPure"

describe("Algo: jump search with Vanilla JS", () => {
  it("works", () => {
    expect(jumpSearch([], 12)).toBe(-1)
    expect(jumpSearch([1], 1)).toBe(0)
    expect(jumpSearch([1, 2], 2)).toBe(1)
    expect(jumpSearch([1, 5, 10, 12], 1)).toBe(0)
    expect(jumpSearch([1, 3, 7, 11, 16, 17, 22, 25], 17)).toBe(5)
    expect(jumpSearch([1, 3, 7, 11, 16, 17, 22, 25], 0)).toBe(-1)
  })
})
