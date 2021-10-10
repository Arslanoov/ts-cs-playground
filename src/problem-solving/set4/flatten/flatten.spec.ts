import { flatten } from "./flatten"

/**
 * Should return array with all removed subarrays
 */

describe("Flatten function", () => {
  it("works", () => {
    expect(flatten([1, 2, 3, [4, 5] ])).toStrictEqual([1, 2, 3, 4, 5])
    expect(flatten([1, [2, [3, 4], [[5]]]])).toStrictEqual([1, 2, 3, 4, 5])
    expect(flatten([[1], [2], [3]])).toStrictEqual([1,2,3])
    expect(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])).toStrictEqual([1,2,3])
  })
})