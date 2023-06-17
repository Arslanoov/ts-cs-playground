import { Heap } from "../Heap"

export class MaxHeap extends Heap {
  pairIsInCorrectOrder(first: number, second: number): boolean {
    return first >= second
  }
}
