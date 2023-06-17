export const shellSort = (input) => {
  const arr = [...input]

  let middle = Math.floor(arr.length / 2)
  while (middle > 0) {
    for (let i = 0; i < (arr.length - middle); i++) {
      let current = i
      let middleIndex = i + middle

      while (current >= 0) {
        if (arr[middleIndex] < arr[current]) {
          [arr[current], arr[middleIndex]] = [arr[middleIndex], arr[current]]
        }

        middleIndex = current
        current -= middle
      }
    }

    middle = Math.floor(middle / 2)
  }

  return arr
}
