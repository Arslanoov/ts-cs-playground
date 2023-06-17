
/**
 * @param {HTMLElement | null} root
 * @return {HTMLElement[]}
 */
function flatten(root) {
  if (!root) return [];

  const queue = [root];
  const result = [];

  while (queue.length !== 0) {
    const node = queue.shift();
    result.push(node);
    queue.push(...node.children);
  }

  return result;
}