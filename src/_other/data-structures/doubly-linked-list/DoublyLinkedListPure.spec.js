import { DoublyLinkedListNode, DoublyLinkedList } from "./DoublyLinkedListPure.js";

describe("Doubly Linked List Node with Vanilla JS", () => {
  it("creates with empty ref", () => {
    const value = 55
    const next = null
    const prev = null
    const node = new DoublyLinkedListNode(value, next, prev)

    expect(node.value).toBe(value)
    expect(node.next).toBe(next)
    expect(node.prev).toBe(prev)
  })

  it("creates with ref", () => {
    const prevNode = new DoublyLinkedListNode("prev-string")
    const nextNode = new DoublyLinkedListNode("string")
    const value = 155
    const node = new DoublyLinkedListNode(value, nextNode, prevNode)

    expect(node.value).toBe(value)
    expect(node.next).toBe(nextNode)
    expect(node.prev).toBe(prevNode)
  })

  it("formats to string without formatter", () => {
    const value = 55
    const node = new DoublyLinkedListNode(value)

    expect(node.toString()).toBe("55")
  })

  it("formats to string with formatter", () => {
    const value = 55
    const formatter = (value) => `value: ${value}`
    const node = new DoublyLinkedListNode(value)

    expect(node.toString(formatter)).toBe("value: 55")
  })
})

describe("Doubly Linked List with Vanilla JS", () => {
  test("prepend", () => {
    const list = new DoublyLinkedList()
    list.prepend("45")
    list.prepend("65")
    expect(list.toArray()).toStrictEqual(["65", "45"])
  })

  test("append", () => {
    const list = new DoublyLinkedList()
    list.append("45")
    list.append("65")
    expect(list.toArray()).toStrictEqual(["45", "65"])
  })

  test("remove", () => {
    const list = new DoublyLinkedList()
    list.append("45")
    list.append("65")
    expect(list.contains("45")).toBe(true)
    expect(list.contains("65")).toBe(true)
    list.remove("65")
    expect(list.contains("45")).toBe(true)
    expect(list.contains("65")).toBe(false)
  })

  test("remove head", () => {
    const list = new DoublyLinkedList()
    list.append("45")
    list.append("65")
    expect(list.contains("45")).toBe(true)
    list.removeHead()
    expect(list.contains("45")).toBe(false)
  })

  test("remove tail", () => {
    const list = new DoublyLinkedList()
    list.append("45")
    list.append("65")
    expect(list.contains("65")).toBe(true)
    list.removeTail()
    expect(list.contains("65")).toBe(false)
  })

  test("from array", () => {
    const list = new DoublyLinkedList()
    expect(list.toArray()).toStrictEqual([])
    const items = ["test", "test1", "test2"]
    list.fromArray(items)
    expect(list.toArray()).toStrictEqual(items)
  })

  test("reverse", () => {
    const list = new DoublyLinkedList()
    const items = ["test", "test1", "test2"]
    list.fromArray(items)
    expect(list.toArray()).toStrictEqual(items)
    list.reverse()
    expect(list.toArray()).toStrictEqual(items.reverse())
  })
})
