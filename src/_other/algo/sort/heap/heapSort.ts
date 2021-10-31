import { MinHeap } from "../../../../data-structures/tree/heap/binary/first/min/MinHeap"

export const heapSort = (arr: number[]): number[] => {
  const sorted: number[] = []
  const heap = new MinHeap()

  arr.forEach((value) => heap.add(value))

  while (!heap.isEmpty()) {
    sorted.push(heap.poll())
  }

  return sorted
}
