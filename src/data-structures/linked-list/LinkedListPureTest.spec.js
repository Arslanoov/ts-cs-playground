import { LinkedList, LinkedListNode } from "./LinkedListPure.js";

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

describe("Linked List in Vanilla JS", () => {
  test("prepend", () => {
    const list = new LinkedList()
    list.prepend("45")
    list.prepend("65")
    expect(list.toArray()).toStrictEqual(["65", "45"])
  })

  test("append", () => {
    const list = new LinkedList()
    list.append("45")
    list.append("65")
    expect(list.toArray()).toStrictEqual(["45", "65"])
  })

  test("find", () => {
    const list = new LinkedList()
    list.append("45")
    list.append("65")
    expect(list.find("45")).not.toBe(null)
    expect(list.find("455")).toBe(null)
  })

  test("contains", () => {
    const list = new LinkedList()
    list.append("45")
    list.append("65")
    expect(list.contains("45")).toBe(true)
    expect(list.contains("455")).toBe(false)
  })
})
