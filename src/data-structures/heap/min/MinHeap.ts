import { Heap } from "../Heap"

export class MinHeap extends Heap {
  pairIsInCorrectOrder(first: number, second: number): boolean {
    return first <= second
  }
}
