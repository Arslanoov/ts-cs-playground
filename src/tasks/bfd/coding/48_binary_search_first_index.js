/**
 * @param {number[]} arr - ascending array with duplicates
 * @param {number} target
 * @return {number}
 */
function firstIndex(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const middle = Math.floor((right + left) / 2);
        if (arr[middle] >= target) {
            right = middle;
        } else {
            left = middle + 1;
        }
    }

    return arr[left] === target ? left : -1;
}
