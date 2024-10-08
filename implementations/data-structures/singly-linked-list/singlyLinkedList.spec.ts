import { SinglyLinkedListNode, SinglyLinkedList } from "./singlyLinkedList"

describe("Linked List", () => {
  it("creates node", () => {
    const node = new SinglyLinkedListNode<number>(5)
    expect(node.value).toBe(5)
    expect(node.next).toBeNull()

    node.next = new SinglyLinkedListNode<number>(7)
    expect(node.next.value).toBe(7)
    expect(node.next.next).toBeNull()
  })

  it("appends data", () => {
    const list = new SinglyLinkedList<number>()

    list.appendValue(10)
    list.appendValue(1314)
    list.appendValue(14144)

    expect(list.getLength()).toBe(3)
    expect(list.toArray()).toStrictEqual([10, 1314, 14144])
  })

  it("prepends data", () => {
    const list = new SinglyLinkedList<number>()

    list.prependValue(10)
    list.prependValue(1314)
    list.prependValue(14144)

    expect(list.getLength()).toBe(3)
    expect(list.toArray()).toStrictEqual([14144, 1314, 10])
  })

  it("pops data", () => {
    const list = new SinglyLinkedList<number>()

    list.appendValue(10)
    list.appendValue(1314)
    list.appendValue(14144)

    expect(list.toArray()).toStrictEqual([10, 1314, 14144])
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
    const list = new SinglyLinkedList<number>()

    list.appendValue(12)
    list.appendValue(10)
    list.appendValue(1314)
    list.appendValue(14144)

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

  it("finds data by index", () => {
    const list = new SinglyLinkedList<number>()

    list.appendValue(12)
    list.appendValue(10)
    list.appendValue(1314)
    list.appendValue(14144)

    expect(list.findByIndex(0).value).toBe(12)
    expect(list.findByIndex(3).value).toBe(14144)
    expect(list.findByIndex(2).value).toBe(1314)
    expect(list.findByIndex(30)).toBeNull()
  })

  it("sets data", () => {
    const list = new SinglyLinkedList<number>()

    list.appendValue(12)
    list.appendValue(10)
    list.appendValue(1314)
    list.appendValue(14144)

    expect(list.toArray()).toStrictEqual([12, 10, 1314, 14144])
    list.set(1, 25)
    expect(list.toArray()).toStrictEqual([12, 25, 1314, 14144])
    list.set(3, 99)
    expect(list.toArray()).toStrictEqual([12, 25, 1314, 99])
  })

  it("appends node", () => {
    const list = new SinglyLinkedList<number>()

    list.appendValue(12)
    list.appendValue(10)
    list.appendValue(1314)
    list.appendValue(14144)

    expect(list.toArray()).toStrictEqual([12, 10, 1314, 14144])

    const node = new SinglyLinkedListNode<number>(5)
    node.next = new SinglyLinkedListNode<number>(7)

    // Insert node with own next pointer
    list.append(node)

    expect(list.toArray()).toStrictEqual([12, 10, 1314, 14144, 5, 7])
  })

  it("removes data", () => {
    const list = new SinglyLinkedList<number>()

    list.appendValue(12)
    list.appendValue(10)
    list.appendValue(1314)
    list.appendValue(14144)

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
    const list = new SinglyLinkedList<number>()

    list.appendValue(12)
    list.appendValue(10)
    list.appendValue(1314)
    list.appendValue(14144)

    expect(list.toArray()).toStrictEqual([12, 10, 1314, 14144])

    list.reverse()

    expect(list.toArray()).toStrictEqual([14144, 1314, 10, 12])

    list.reverse()

    expect(list.toArray()).toStrictEqual([12, 10, 1314, 14144])
  })
})