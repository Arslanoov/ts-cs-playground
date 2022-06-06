
/**
 * @param {Node} head
 * @return {boolean}
 */
function hasCircle(head) {
  const nodes = new Set();
  let current = head;

  while (current) {
    if (nodes.has(current)) {
      return true;
    }

    nodes.add(current);
    current = current.next;
  }

  return false;
}