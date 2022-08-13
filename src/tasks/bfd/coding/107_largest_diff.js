/**
 * @param {number[]} arr
 * @return {number}
 */
function largestDiff(arr) {
    if (arr.length <= 1) return 0;

    let min = Infinity;
    let max = -Infinity;

    arr.forEach((item) => {
        min = Math.min(min, item);
        max = Math.max(max, item);
    });

    return Math.abs(max - min);
}
