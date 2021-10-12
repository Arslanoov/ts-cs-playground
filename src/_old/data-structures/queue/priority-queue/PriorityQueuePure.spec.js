import { PriorityQueue } from "./PriorityQueue"

/**
 * @see https://github.com/trekhleb/javascript-algorithms/blob/4548296affb227c29ead868309e48667f8280c55/src/data-structures/priority-queue/__test__/PriorityQueue.test.js
 * TODO: Write own tests
 */
describe("PriorityQueue with Vanilla JS", () => {
  it("should create default priority queue", () => {
    const priorityQueue = new PriorityQueue()

    expect(priorityQueue).toBeDefined()
  })

  it("should insert items to the queue and respect priorities", () => {
    const priorityQueue = new PriorityQueue()

    priorityQueue.addItem(10, 1)
    expect(priorityQueue.peek()).toBe(10)

    priorityQueue.addItem(5, 2)
    expect(priorityQueue.peek()).toBe(10)

    priorityQueue.addItem(100, 0)
    expect(priorityQueue.peek()).toBe(100)
  })

  it("should be possible to use objects in priority queue", () => {
    const priorityQueue = new PriorityQueue()

    const user1 = { name: "Mike" }
    const user2 = { name: "Bill" }
    const user3 = { name: "Jane" }

    priorityQueue.addItem(user1, 1)
    expect(priorityQueue.peek()).toBe(user1)

    priorityQueue.addItem(user2, 2)
    expect(priorityQueue.peek()).toBe(user1)

    priorityQueue.addItem(user3, 0)
    expect(priorityQueue.peek()).toBe(user3)
  })

  it("should poll from queue with respect to priorities", () => {
    const priorityQueue = new PriorityQueue()

    priorityQueue.addItem(10, 1)
    priorityQueue.addItem(5, 2)
    priorityQueue.addItem(100, 0)
    priorityQueue.addItem(200, 0)

    expect(priorityQueue.poll()).toBe(100)
    expect(priorityQueue.poll()).toBe(200)
    expect(priorityQueue.poll()).toBe(10)
    expect(priorityQueue.poll()).toBe(5)
  })

  it("should be possible to change priority of head node", () => {
    const priorityQueue = new PriorityQueue()

    priorityQueue.addItem(10, 1)
    priorityQueue.addItem(5, 2)
    priorityQueue.addItem(100, 0)
    priorityQueue.addItem(200, 0)

    expect(priorityQueue.peek()).toBe(100)

    priorityQueue.changePriority(100, 10)
    priorityQueue.changePriority(10, 20)

    expect(priorityQueue.poll()).toBe(200)
    expect(priorityQueue.poll()).toBe(5)
    expect(priorityQueue.poll()).toBe(100)
    expect(priorityQueue.poll()).toBe(10)
  })

  it("should be possible to change priority of internal nodes", () => {
    const priorityQueue = new PriorityQueue()

    priorityQueue.addItem(10, 1)
    priorityQueue.addItem(5, 2)
    priorityQueue.addItem(100, 0)
    priorityQueue.addItem(200, 0)

    expect(priorityQueue.peek()).toBe(100)

    priorityQueue.changePriority(200, 10)
    priorityQueue.changePriority(10, 20)

    expect(priorityQueue.poll()).toBe(100)
    expect(priorityQueue.poll()).toBe(5)
    expect(priorityQueue.poll()).toBe(200)
    expect(priorityQueue.poll()).toBe(10)
  })

  it("should be possible to change priority along with node addItemition", () => {
    const priorityQueue = new PriorityQueue()

    priorityQueue.addItem(10, 1)
    priorityQueue.addItem(5, 2)
    priorityQueue.addItem(100, 0)
    priorityQueue.addItem(200, 0)

    priorityQueue.changePriority(200, 10)
    priorityQueue.changePriority(10, 20)

    priorityQueue.addItem(15, 15)

    expect(priorityQueue.poll()).toBe(100)
    expect(priorityQueue.poll()).toBe(5)
    expect(priorityQueue.poll()).toBe(200)
    expect(priorityQueue.poll()).toBe(15)
    expect(priorityQueue.poll()).toBe(10)
  })

  it("should be possible to search in priority queue by value", () => {
    const priorityQueue = new PriorityQueue()

    priorityQueue.addItem(10, 1)
    priorityQueue.addItem(5, 2)
    priorityQueue.addItem(100, 0)
    priorityQueue.addItem(200, 0)
    priorityQueue.addItem(15, 15)

    expect(priorityQueue.hasValue(70)).toBe(false)
    expect(priorityQueue.hasValue(15)).toBe(true)
  })
})
