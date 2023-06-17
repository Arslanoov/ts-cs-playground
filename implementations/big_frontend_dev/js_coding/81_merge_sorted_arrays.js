/**
 * @param {number[][]} list
 * non-descending integer array
 * @return {number[]}
 */
function merge(list) {
    if (list.length === 0) return [];
    if (list.length === 1) return list[0];
    if (list.length === 2) return mergeRecursive(list[0], list[1]);

    const middle = Math.floor(list.length / 2);
    return mergeRecursive(
        merge(list.slice(0, middle)),
        merge(list.slice(middle, list.length))
    );
}

function mergeRecursive(arr1, arr2) {
    const result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length || j < arr2.length) {
        if (i >= arr1.length || arr1[i] > arr2[j]) {
            result.push(arr2[j]);
            j++;
        } else {
            result.push(arr1[i]);
            i++;
        }
    }

    return result;
}
