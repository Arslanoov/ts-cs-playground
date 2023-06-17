import { Heap } from "../Heap"

export class MinHeap extends Heap {
  pairIsInCorrectOrder(first, second) {
    return first <= second
  }
}
