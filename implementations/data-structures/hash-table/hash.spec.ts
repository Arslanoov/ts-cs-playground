import { hash } from "./hash"

describe("Hash function", () => {
  it("works", () => {
    expect(hash("test", 31)).toBe(16)
    expect(hash("test", 31)).toBe(16)
    expect(hash("some text", 31)).toBe(2)
    expect(hash("some text", 31)).toBe(2)
    expect(hash("test", 13)).toBe(9)
    expect(hash("test", 13)).toBe(9)
    expect(hash("test2", 31)).toBe(12)
    expect(hash("test2", 31)).toBe(12)
  })
})
