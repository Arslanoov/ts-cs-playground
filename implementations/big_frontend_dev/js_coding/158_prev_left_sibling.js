/**
 * @param {Element} root
 * @param {Element} target
 * @return {Element | null}
 */
function previousLeftSibling(root, target) {
    const queue = [root];

    while (queue.length > 0) {
        const len = queue.length;
        let prevEl = null;

        for (let i = 0; i < len; i++) {
            const el = queue.shift();

            if (el === target) {
                return prevEl;
            }

            queue.push(...el.children);
            prevEl = el;
        }
    }

    return null;
}
