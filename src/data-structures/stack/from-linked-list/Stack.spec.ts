import { Stack } from "./Stack";

describe("Stack (linked list implementation)", () => {
  test("push", () => {
    const list = new Stack<string>()
    list.push("item1")
    list.push("item2")
    expect(list.toArray()).toStrictEqual(["item1", "item2"])
  })

  test("pop", () => {
    const list = new Stack<string>()
    list.push("item1")
    list.push("item2")
    list.push("item3")
    expect(list.pop()).toBe("item3")
    expect(list.toArray()).toStrictEqual(["item1", "item2"])
  })

  test("peek", () => {
    const list = new Stack<string>()
    list.push("item1")
    list.push("item2")
    list.push("item3")
    expect(list.peek()).toBe("item3")
    expect(list.toArray()).toStrictEqual(["item1", "item2", "item3"])
  })

  test("length", () => {
    const list = new Stack<string>()
    expect(list.isEmpty()).toBe(true)
    list.push("item1")
    list.push("item2")
    list.push("item3")
    expect(list.getLength()).toBe(3)
    expect(list.isEmpty()).toBe(false)
  })
})
