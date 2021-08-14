import { LinkedListNode } from "./LinkedListPure.js";

describe("Linked List Node in Vanilla JS", () => {
  it("creates with empty ref", () => {
    const value = 55
    const next = null
    const node = new LinkedListNode(value, next)

    expect(node.value).toBe(value)
    expect(node.next).toBe(next)
  })

  it("creates with ref", () => {
    const nextNode = new LinkedListNode("string")
    const value = 155
    const node = new LinkedListNode(value, nextNode)

    expect(node.value).toBe(value)
    expect(node.next).toBe(nextNode)
  })

  it("formats to string without formatter", () => {
    const value = 55
    const next = null
    const node = new LinkedListNode(value, next)

    expect(node.toString()).toBe("55")
  })

  it("formats to string with formatter", () => {
    const value = 55
    const next = null
    const formatter = (value) => `value: ${value}`
    const node = new LinkedListNode(value, next)

    expect(node.toString(formatter)).toBe("value: 55")
  })
})
