import { capitalizeFirst } from "./capitalizeFirst"

/**
 * Should capitalize each the first letter of each string
 */

describe("Capitalize first function", () => {
  it("works", () => {
    expect(capitalizeFirst(["car", "taco", "banana"])).toStrictEqual(["Car", "Taco", "Banana"])
  })
})
