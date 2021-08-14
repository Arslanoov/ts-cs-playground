import { LinkedList } from "./LinkedList.ts";

const list = new LinkedList()
const a = 2
const b = 3

describe("Linked List", () => {
  it("works", () => {
    expect(list.action(a, b)).toBe(a + b)
  })
})
