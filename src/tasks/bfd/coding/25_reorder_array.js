const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]]

/**
 * @param {any[]} items
 * @param {number[]} newOrder
 * @return {void}
 */
function sort(items, newOrder) {
  for (let i = 0; i < newOrder.length; i++) {
    while (newOrder[i] !== i) {
      swap(items, i, newOrder[i]);
      swap(newOrder, i, newOrder[i]);
    }
  }
}