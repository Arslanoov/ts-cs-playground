const BASE = 17

// O(n)
// n - string length
export const simplePolynomialHash = (str: string, base = BASE): number => {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash += str.charCodeAt(i) * (base ** i)
  }
  return hash
}

// O(1)
export const simplePolynomialRoll = (
  prevHash: number,
  prevStr: string,
  newStr: string,
  base = BASE
): number => {
  let hash = prevHash

  hash -= prevStr.charCodeAt(0)
  hash /= base
  hash += (newStr.charCodeAt(newStr.length - 1)) * (base ** (newStr.length - 1))

  return hash
}