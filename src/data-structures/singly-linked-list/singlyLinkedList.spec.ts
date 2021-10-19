import { SinglyLinkedListNode, SinglyLinkedList } from "./singlyLinkedList"

describe("Linked List", () => {
  it("creates node", () => {
    const node = new SinglyLinkedListNode<number>(5)
    expect(node.value).toBe(5)
    expect(node.next).toBe(null)

    node.next = new SinglyLinkedListNode<number>(7)
    expect(node.next.value).toBe(7)
    expect(node.next.next).toBe(null)
  })

  it("pushes data", () => {
    const list = new SinglyLinkedList<number>()
    list.push(10)
    list.push(1314)
    list.push(14144)
    expect(list.toArray()).toStrictEqual([10, 1314, 14144])
  })
})