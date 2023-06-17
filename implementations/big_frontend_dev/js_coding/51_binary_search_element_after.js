/**
 * @param {number[]} arr - ascending array with duplicates
 * @param {number} target
 * @return {number}
 */
function elementAfter(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const middle = left + Math.floor((right - left) / 2);
        if (arr[middle] <= target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return arr[left - 1] === target ? arr[left] : undefined;
}
