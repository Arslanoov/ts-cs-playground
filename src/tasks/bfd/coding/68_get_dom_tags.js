
/**
 * @param {HTMLElement} tree
 * @param {string[]} tags
 * @return {string[]}
 */
function getTags(tree, tags = new Set()) {
  tags.add(tree.tagName.toLowerCase());

  for (child of tree.children) {
    getTags(child, tags);
  }

  return Array.from(tags);
}