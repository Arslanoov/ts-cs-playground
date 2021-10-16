import { bitsCount } from "./bitsCount"

/**
 * @see https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/math/bits/__test__/bitLength.test.js
 * TODO: Write my own tests
 */
describe("Algo: bits count", () => {
  it("works", () => {
    expect(bitsCount(0b0)).toBe(0)
    expect(bitsCount(0b1)).toBe(1)
    expect(bitsCount(0b01)).toBe(1)
    expect(bitsCount(0b101)).toBe(3)
    expect(bitsCount(0b0101)).toBe(3)
    expect(bitsCount(0b10101)).toBe(5)
    expect(bitsCount(0b11110101)).toBe(8)
    expect(bitsCount(0b00011110101)).toBe(8)
  })
})
