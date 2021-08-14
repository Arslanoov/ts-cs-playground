import { LinkedListNode } from "./LinkedList.ts";

describe("Linked List Node", () => {
  it("creates with empty ref", () => {
    const value = 55
    const next = null
    const node = new LinkedListNode<number, null>(value, next)

    expect(node.value).toBe(value)
    expect(node.next).toBe(next)
  })

  it("creates with ref", () => {
    const nextNode = new LinkedListNode<string, null>("string")
    const value = 155
    const node = new LinkedListNode<number, typeof nextNode.value>(value, nextNode)

    expect(node.value).toBe(value)
    expect(node.next).toBe(nextNode)
  })

  it("formats to string without formatter", () => {
    const value = 55
    const next = null
    const node = new LinkedListNode<number, null>(value, next)

    expect(node.toString()).toBe("55")
  })

  it("formats to string with formatter", () => {
    const value = 55
    const next = null
    const formatter = (value: number) => `value: ${value}`
    const node = new LinkedListNode<number, null>(value, next)

    expect(node.toString(formatter)).toBe("value: 55")
  })
})
