import { DoublyLinkedListNode, DoublyLinkedList } from "./doublyLinkedList"

describe("Doubly Linked List", () => {
  it("creates node", () => {
    const node = new DoublyLinkedListNode<number>(5)
    expect(node.value).toBe(5)
    expect(node.prev).toBeNull()
    expect(node.next).toBeNull()

    node.next = new DoublyLinkedListNode<number>(7)
    node.prev = new DoublyLinkedListNode<number>(10)
    expect(node.next.value).toBe(7)
    expect(node.next.next).toBeNull()
    expect(node.prev.value).toBe(10)
    expect(node.prev.prev).toBeNull()
  })

  it("pushes data", () => {
    const list = new DoublyLinkedList<number>()

    list.push(10)
    list.push(1314)
    list.push(14144)

    expect(list.getLength()).toBe(3)
    expect(list.toArray()).toStrictEqual([10, 1314, 14144])
  })

  it("unshifts data", () => {
    const list = new DoublyLinkedList<number>()

    list.unshift(10)
    list.unshift(1314)
    list.unshift(14144)

    expect(list.getLength()).toBe(3)
    expect(list.toArray()).toStrictEqual([14144, 1314, 10])
  })

  it("pops data", () => {
    const list = new DoublyLinkedList<number>()

    list.push(10)
    list.push(1314)
    list.push(14144)

    list.pop()
    expect(list.getLength()).toBe(2)
    expect(list.toArray()).toStrictEqual([10, 1314])
    list.pop()
    expect(list.getLength()).toBe(1)
    expect(list.toArray()).toStrictEqual([10])
    list.pop()
    expect(list.getLength()).toBe(0)
    expect(list.toArray()).toStrictEqual([])
    list.pop()
    expect(list.getLength()).toBe(0)
    expect(list.toArray()).toStrictEqual([])
  })

  it("shifts data", () => {
    const list = new DoublyLinkedList<number>()

    list.push(12)
    list.push(10)
    list.push(1314)
    list.push(14144)

    list.shift()
    expect(list.getLength()).toBe(3)
    expect(list.toArray()).toStrictEqual([10, 1314, 14144])
    list.shift()
    expect(list.getLength()).toBe(2)
    expect(list.toArray()).toStrictEqual([1314, 14144])
    list.shift()
    expect(list.getLength()).toBe(1)
    expect(list.toArray()).toStrictEqual([14144])
    list.shift()
    expect(list.getLength()).toBe(0)
    expect(list.toArray()).toStrictEqual([])
    list.shift()
    expect(list.getLength()).toBe(0)
    expect(list.toArray()).toStrictEqual([])
  })

  it("finds data", () => {
    const list = new DoublyLinkedList<number>()

    list.push(12)
    list.push(10)
    list.push(1314)
    list.push(14144)

    expect(list.find(0).value).toBe(12)
    expect(list.find(3).value).toBe(14144)
    expect(list.find(2).value).toBe(1314)
    expect(list.find(30)).toBeNull()
  })

  it("sets data", () => {
    const list = new DoublyLinkedList<number>()

    list.push(12)
    list.push(10)
    list.push(1314)
    list.push(14144)

    expect(list.toArray()).toStrictEqual([12, 10, 1314, 14144])
    list.set(1, 25)
    expect(list.toArray()).toStrictEqual([12, 25, 1314, 14144])
    list.set(3, 99)
    expect(list.toArray()).toStrictEqual([12, 25, 1314, 99])
  })

  it("inserts data", () => {
    const list = new DoublyLinkedList<number>()

    list.push(12)
    list.push(10)
    list.push(1314)
    list.push(14144)

    expect(list.toArray()).toStrictEqual([12, 10, 1314, 14144])

    const node = new DoublyLinkedListNode<number>(5)
    node.next = new DoublyLinkedListNode<number>(7)

    // Insert node with own next pointer
    list.insert(2, node)

    expect(list.toArray()).toStrictEqual([12, 10, 5, 7])
  })

  it("removes data", () => {
    const list = new DoublyLinkedList<number>()

    list.push(12)
    list.push(10)
    list.push(1314)
    list.push(14144)

    expect(list.toArray()).toStrictEqual([12, 10, 1314, 14144])

    list.remove(1)

    expect(list.toArray()).toStrictEqual([12, 1314, 14144])

    list.remove(2)

    expect(list.toArray()).toStrictEqual([12, 1314])

    list.remove(0)

    expect(list.toArray()).toStrictEqual([1314])

    list.remove(10)
    list.remove(-20)

    expect(list.toArray()).toStrictEqual([1314])

    list.remove(0)

    expect(list.toArray()).toStrictEqual([])
  })

  it("reverses data", () => {
    const list = new DoublyLinkedList<number>()

    list.push(12)
    list.push(10)
    list.push(1314)
    list.push(14144)

    expect(list.toArray()).toStrictEqual([12, 10, 1314, 14144])

    list.reverse()

    expect(list.toArray()).toStrictEqual([14144, 1314, 10, 12])

    list.reverse()

    expect(list.toArray()).toStrictEqual([12, 10, 1314, 14144])
  })
})