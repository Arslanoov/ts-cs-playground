import { polynomialHash, polynomialRoll } from "../../../common/cryptography/polynomial-hash/polynomialHash"

// Time Complexity: O(n * m)
// Space complexity: O(p)
export const rabinKarp = (text: string, word: string): number => {
  const hash = polynomialHash(word)

  let prevWord: string | null = null
  let currentHash: number | null = null

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