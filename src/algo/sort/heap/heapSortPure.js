import { MinHeap } from "../../../data-structures/heap/min/MinHeapPure"

export const heapSort = (arr) => {
  const sorted = []
  const heap = new MinHeap()

  arr.forEach((value) => heap.add(value))

  while (!heap.isEmpty()) {
    sorted.push(heap.poll())
  }

  return sorted
}
