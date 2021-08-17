import { Queue } from "./QueuePure";

describe("Queue with Vanilla JS (linked list implementation)", () => {
  test("enqueue", () => {
    const list = new Queue()
    list.enqueue("item1")
    list.enqueue("item2")
    expect(list.toArray()).toStrictEqual(["item1", "item2"])
  })

  test("dequeue", () => {
    const list = new Queue()
    list.enqueue("item1")
    list.enqueue("item2")
    list.enqueue("item3")
    expect(list.dequeue()).toBe("item1")
    expect(list.toArray()).toStrictEqual(["item2", "item3"])
  })

  test("peek", () => {
    const list = new Queue()
    list.enqueue("item1")
    list.enqueue("item2")
    list.enqueue("item3")
    expect(list.peek()).toBe("item1")
    expect(list.toArray()).toStrictEqual(["item1", "item2", "item3"])
  })

  test("length", () => {
    const list = new Queue()
    expect(list.isEmpty()).toBe(true)
    list.enqueue("item1")
    list.enqueue("item2")
    list.enqueue("item3")
    expect(list.getLength()).toBe(3)
    expect(list.isEmpty()).toBe(false)
  })
})
