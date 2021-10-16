import { LinkedList } from "../../../data-structures/linked-list/LinkedList"
import { traversal } from "./linkedListTraversal"

/**
 * @see https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/linked-list/traversal/__test__/traversal.test.js
 * TODO: Write my own tests
 */
describe("Algo: LL traversal", () => {
  it("should traverse linked list", () => {
    const linkedList = new LinkedList()

    linkedList.append(1)
    linkedList.append(2)
    linkedList.append(3)

    const traversedNodeValues = []
    const traversalCallback = (nodeValue) => {
      traversedNodeValues.push(nodeValue)
    }

    traversal(linkedList, traversalCallback)

    expect(traversedNodeValues).toEqual([1, 2, 3])
  })
})
