/**
 * @param {number[]} arr
 */
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let notSwapped = true
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                notSwapped = false
            }
        }

        if (notSwapped) break
    }
}
