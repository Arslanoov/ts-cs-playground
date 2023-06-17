import { reverse } from "./reverse"

/**
 * Should reverse string
 */

describe("Reverse function", () => {
  it("works", () => {
    expect(reverse("hello")).toBe("olleh")
    expect(reverse("awesome")).toBe("emosewa")
    expect(reverse("rithmschool")).toBe("loohcsmhtir")
  })
})
