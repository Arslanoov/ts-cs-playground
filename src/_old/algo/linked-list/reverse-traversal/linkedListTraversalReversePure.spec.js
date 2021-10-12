import { LinkedList } from "../../../data-structures/linked-list/LinkedListPure"
import { traversalReverse } from "./linkedListTraversalReversePure"

describe("Algo: LL traversal reverse with Vanilla JS", () => {
  it("should traverse linked list", () => {
    const linkedList = new LinkedList()

    linkedList.append(1)
    linkedList.append(2)
    linkedList.append(3)

    const traversedNodeValues = []
    const traversalCallback = (nodeValue) => {
      traversedNodeValues.push(nodeValue)
    }

    traversalReverse(linkedList, traversalCallback)

    expect(traversedNodeValues).toEqual([3, 2, 1])
  })
})
