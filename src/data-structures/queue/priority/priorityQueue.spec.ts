import { PriorityQueue } from "./priorityQueue"

describe("Priority Queue", () => {
  it("works", () => {
    const queue = new PriorityQueue()
    queue.enqueue("should come second", 5)
    queue.enqueue("should come first", 10)
    queue.enqueue("should come fourth", 1)
    queue.enqueue("should come third", 3)

    expect(queue.values).toStrictEqual([
      {
        priority: 10,
        value: "should come first"
      },
      {
        priority: 5,
        value: "should come second"
      },
      {
        priority: 1,
        value: "should come fourth"
      },
      {
        priority: 3,
        value: "should come third"
      }
    ])

    let dequeueItem = queue.dequeue()
    expect(dequeueItem.value).toEqual("should come first")
    expect(dequeueItem.priority).toEqual(10)

    dequeueItem = queue.dequeue()
    expect(dequeueItem.value).toEqual("should come second")
    expect(dequeueItem.priority).toEqual(5)

    dequeueItem = queue.dequeue()
    expect(dequeueItem.value).toEqual("should come third")
    expect(dequeueItem.priority).toEqual(3)

    dequeueItem = queue.dequeue()
    expect(dequeueItem.value).toEqual("should come fourth")
    expect(dequeueItem.priority).toEqual(1)

    expect(queue.dequeue()).toBeNull()
    expect(queue.dequeue()).toBeNull()
  })
})