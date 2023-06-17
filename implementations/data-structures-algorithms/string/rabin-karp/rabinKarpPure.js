import { polynomialHash, polynomialRoll } from "../../../common/cryptography/polynomial-hash/polynomialHashPure"

// Time Complexity: O(n * m)
// Space complexity: O(p)
export const rabinKarp = (text, word) => {
  const hash = polynomialHash(word)

  let prevWord = null
  let currentHash = null

  for (let i = 0; i <= (text.length - word.length); i++) {
    const currentWord = text.substring(i, i + word.length)
    if (currentHash === null) {
      currentHash = polynomialHash(currentWord)
    } else {
      currentHash = polynomialRoll(currentHash, prevWord, currentWord)
    }

    prevWord = currentWord

    if (hash === currentHash && text.substr(i, word.length) === word) {
      return i
    }
  }

  return -1
}