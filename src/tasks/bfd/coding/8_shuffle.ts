/**
 * @param {any[]} arr
 */
function shuffle(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [arr[randomIndex], arr[i]] = [arr[i], arr[randomIndex]];
  }

  return arr;
}