import { capitalizeWords } from "./capitalizeWords"

/**
 * Should capitalize each word
 */

describe("Capitalize words function", () => {
  it("works", () => {
    expect(capitalizeWords(["car", "taco", "banana"])).toStrictEqual(["CAR", "TACO", "BANANA"])
  })
})
