import { LinkedList, LinkedListNode } from "./LinkedList.ts";

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

describe("Linked List", () => {
  test("prepend", () => {
    const list = new LinkedList<string>()
    list.prepend("45")
    list.prepend("65")
    expect(list.toArray()).toStrictEqual(["65", "45"])
  })

  test("append", () => {
    const list = new LinkedList<string>()
    list.append("45")
    list.append("65")
    expect(list.toArray()).toStrictEqual(["45", "65"])
  })

  test("find", () => {
    const list = new LinkedList<string>()
    list.append("45")
    list.append("65")
    expect(list.find("45")).not.toBe(null)
    expect(list.find("455")).toBe(null)
  })

  test("contains", () => {
    const list = new LinkedList<string>()
    list.append("45")
    list.append("65")
    expect(list.contains("45")).toBe(true)
    expect(list.contains("455")).toBe(false)
  })

  test("remove", () => {
    const list = new LinkedList<string>()
    list.append("45")
    list.append("65")
    expect(list.contains("45")).toBe(true)
    expect(list.contains("65")).toBe(true)
    list.remove("65")
    expect(list.contains("45")).toBe(true)
    expect(list.contains("65")).toBe(false)
  })

  test("remove head", () => {
    const list = new LinkedList<string>()
    list.append("45")
    list.append("65")
    expect(list.contains("45")).toBe(true)
    list.removeHead()
    expect(list.contains("45")).toBe(false)
  })

  test("remove tail", () => {
    const list = new LinkedList<string>()
    list.append("45")
    list.append("65")
    expect(list.contains("65")).toBe(true)
    list.removeTail()
    expect(list.contains("65")).toBe(false)
  })

  test("from array", () => {
    const list = new LinkedList<string>()
    expect(list.toArray()).toStrictEqual([])
    const items = ["test", "test1", "test2"]
    list.fromArray(items)
    expect(list.toArray()).toStrictEqual(items)
  })
})
