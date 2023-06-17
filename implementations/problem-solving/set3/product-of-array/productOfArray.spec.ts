import { productOfArray } from "./productOfArray"

describe("Product of array function", () => {
  it("works", () => {
    expect(productOfArray([1, 2, 3])).toBe(6)
    expect(productOfArray([1, 2, 3, 10])).toBe(60)
  })
})
