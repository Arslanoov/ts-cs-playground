/**
 * @param {HTMLElement | null} tree
 * @return {number}
 */
function getHeight(tree) {
    let maxHeight = 0;

    if (!tree) {
        return maxHeight;
    }

    for (let el of tree.children) {
        maxHeight = Math.max(getHeight(el), maxHeight);
    }

    return maxHeight + 1;
}
