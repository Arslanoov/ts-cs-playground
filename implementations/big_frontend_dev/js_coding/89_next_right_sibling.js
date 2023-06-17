/**
 * @param {HTMLElement} root
 * @param {HTMLElement} target
 * @return {HTMLElemnt | null}
 */
function nextRightSibling(root, target) {
    if (!root) return null;

    const queue = [root];

    while (queue.length > 0) {
        let currentCount = queue.length;
        while (currentCount > 0) {
            const node = queue.shift();
            if (node == target) {
                return queue[0] || null;
            }

            if (node.children.length > 0) {
                for (let i = 0; i < node.children.length; i++) {
                    queue.push(node.children[i]);
                }
            }
        }
    }

    return null;
}
