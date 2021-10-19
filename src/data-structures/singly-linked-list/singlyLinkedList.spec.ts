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

    expect(list.getLength()).toBe(3)
    expect(list.toArray()).toStrictEqual([10, 1314, 14144])
  })

  it("unshifts data", () => {
    const list = new SinglyLinkedList<number>()

    list.unshift(10)
    list.unshift(1314)
    list.unshift(14144)

    expect(list.getLength()).toBe(3)
    expect(list.toArray()).toStrictEqual([14144, 1314, 10])
  })

  it("pops data", () => {
    const list = new SinglyLinkedList<number>()

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
    const list = new SinglyLinkedList<number>()

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

  it("gets data", () => {
    const list = new SinglyLinkedList<number>()

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
    const list = new SinglyLinkedList<number>()

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
})