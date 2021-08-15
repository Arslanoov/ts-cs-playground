import { DoublyLinkedListNode } from "./DoublyLinkedList.ts";

describe("Doubly Linked List Node", () => {
  it("creates with empty ref", () => {
    const value = 55
    const next = null
    const prev = null
    const node = new DoublyLinkedListNode<number>(value, next, prev)

    expect(node.value).toBe(value)
    expect(node.next).toBe(next)
    expect(node.prev).toBe(prev)
  })

  it("creates with ref", () => {
    const prevNode = new DoublyLinkedListNode<string>("prev-string")
    const nextNode = new DoublyLinkedListNode<string>("string")
    const value = 155
    const node = new DoublyLinkedListNode<number>(value, nextNode, prevNode)

    expect(node.value).toBe(value)
    expect(node.next).toBe(nextNode)
    expect(node.prev).toBe(prevNode)
  })

  it("formats to string without formatter", () => {
    const value = 55
    const node = new DoublyLinkedListNode<number>(value)

    expect(node.toString()).toBe("55")
  })

  it("formats to string with formatter", () => {
    const value = 55
    const formatter = (value: number) => `value: ${value}`
    const node = new DoublyLinkedListNode<number>(value)

    expect(node.toString(formatter)).toBe("value: 55")
  })
})
