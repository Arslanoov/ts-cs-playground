
/**
 * @param { (version: number) => boolean } isBad
 */
function firstBadVersion(isBad) {
  return (version) => {
    let left = 0
    let right = version
    let middle

    while (left <= right) {
      middle = Math.floor((right + left) / 2)
      if (isBad(middle)) {
        right = middle - 1
      } else {
        left = middle + 1
      }
    }

    if (version >= left) {
      return left
    }

    return -1
  }
}