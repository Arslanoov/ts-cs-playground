function swap(arr, first, second) {
    [arr[first], arr[second]] = [arr[second], arr[first]]
}

function quickSortPivot(arr, start = 0, end = arr.length - 1) {
    const pivot = arr[start]
    let swapIndex = start

    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < pivot) {
            swapIndex++
            swap(arr, swapIndex, i)
        }
    }

    swap(arr, swapIndex, start)

    return swapIndex
}

/**
 * @param {number[]} arr
 * @param {number} start
 * @param {number} end
 */
function quickSort(arr, start = 0, end = arr.length - 1) {
    if (start < end) {
        const pivot = quickSortPivot(arr, start, end)
        quickSort(arr, start, pivot - 1)
        quickSort(arr, pivot + 1, end)
    }

    return arr
}
