import { Heap } from "../Heap"

export class MaxHeap extends Heap {
  pairIsInCorrectOrder(first, second) {
    return first >= second
  }
}
