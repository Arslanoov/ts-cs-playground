import { callbackRecursiveIndex, callbackRecursiveSlice } from "./callbackRecursive"

/**
 * Should return true if callback with some element in array returns true
 */

describe("Callback recursive function", () => {
  test("index method", () => {
    const isOdd: (val: any) => boolean = (val) => val % 2 !== 0

    expect(callbackRecursiveIndex([1, 2, 3, 4], isOdd)).toBe(true)
    expect(callbackRecursiveIndex([4, 6, 8, 9], isOdd)).toBe(true)
    expect(callbackRecursiveIndex([4, 6, 8], isOdd)).toBe(false)
    expect(callbackRecursiveIndex([4, 6, 8], val => val > 10)).toBe(false)
  })

  test("slice method", () => {
    const isOdd: (val: any) => boolean = (val) => val % 2 !== 0
    
    expect(callbackRecursiveSlice([1, 2, 3, 4], isOdd)).toBe(true)
    expect(callbackRecursiveSlice([4, 6, 8, 9], isOdd)).toBe(true)
    expect(callbackRecursiveSlice([4, 6, 8], isOdd)).toBe(false)
    expect(callbackRecursiveSlice([4, 6, 8], val => val > 10)).toBe(false)
  })
})
