/**
 * class Node {
 *  new(val: number, next: Node);
 *    val: number
 *    next: Node
 * }
 */

/**
 * @param {Node} list
 * @return {Node}
 */
const reverseLinkedList = (list) => {
  let prevNode = null;
  let nextNode = null;

  while (list) {
    nextNode = list.next;
    list.next = prevNode;
    prevNode = list;
    list = nextNode;
  }

  return prevNode;
}