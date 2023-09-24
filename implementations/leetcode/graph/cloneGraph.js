/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
const cloneGraph = function(node, cloned = new Map()) {
    if (node === null) return null;
    if (cloned.has(node)) return cloned.get(node);

    const clonedNode = new Node(node.val);
    cloned.set(node, clonedNode);

    for (let i = 0; i < node.neighbors.length; i++) {
        clonedNode.neighbors.push(
            cloneGraph(node.neighbors[i], cloned)
        );
    }

    return clonedNode;
};
