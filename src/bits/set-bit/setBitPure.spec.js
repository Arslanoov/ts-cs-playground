import { setBit } from "./setBitPure"

/**
 * @see https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/math/bits/__test__/setBit.test.js
 * TODO: Write my own tests
 */
describe("Algo: set bit with Vanilla JS", () => {
  it("works", () => {
    // 1 = 0b0001
    expect(setBit(1, 0)).toBe(1)
    expect(setBit(1, 1)).toBe(3)
    expect(setBit(1, 2)).toBe(5)

    // 10 = 0b1010
    expect(setBit(10, 0)).toBe(11)
    expect(setBit(10, 1)).toBe(10)
    expect(setBit(10, 2)).toBe(14)
  })
})
