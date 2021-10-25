import { MaxHeap } from "./maxHeap"

describe("Max Heap", () => {
  it("works", () => {
    let heap = new MaxHeap()
    heap.insert(41)
    heap.insert(39)
    heap.insert(33)
    heap.insert(18)
    heap.insert(27)
    heap.insert(12)
    heap.insert(55)
    expect(heap.values).toStrictEqual([55, 39, 41, 18, 27, 12, 33])
  })
})