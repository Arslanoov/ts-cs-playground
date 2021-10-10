// [5, 7, 1, 7, 8] length = 5; index = 2 - if length is odd
//  [3, 6, 1, 9] length = 4; index = 2 - if length is even

export const isPalindrome = (string: string, index: number = 0): boolean => {
  if (string.length <= 1) return true

  if (
    (string.length % 2 === 0 && string.length / 2 === index) ||
    (string.length % 2 !== 0 && Math.floor(string.length / 2) === index)
  ) {
    return true
  }

  if (string[index] === string[string.length - index - 1]) {
    return isPalindrome(string, index + 1)
  }

  return false
}
