import { naiveStringSearch } from "./naiveStringSearch"

describe("Algo: Naive string search", () => {
  it("works", () => {
    expect(naiveStringSearch("omggmoomggmoomg112omg", "omg")).toBe(4)
    expect(naiveStringSearch("testtexttest", "test")).toBe(2)
    expect(naiveStringSearch("nomatch", "on")).toBe(0)
  })
})
