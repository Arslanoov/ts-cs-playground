/**
 * @param {any[]} arr
 */
function deduplicate(arr) {
    const map = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            arr.splice(i, 1);
            i--;
        } else {
            map.set(arr[i], true);
        }
    }
}
