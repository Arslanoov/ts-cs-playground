
/**
 * @param {HTMLElement} rootA
 * @param {HTMLElement} rootB - rootA and rootB are clone of each other
 * @param {HTMLElement} nodeA
 */
const findCorrespondingNode = (rootA, rootB, target) => {
  if (rootA === target) {
    return rootB;
  }

  for (let i = 0; i < rootA.children.length; i++) {
    const node = findCorrespondingNode(rootA.children[i], rootB.children[i], target);
    if (node) return node;
  }

  return null;
}