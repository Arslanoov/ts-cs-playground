const ALPHABET_SIZE = 26
const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("")

const mod = (n: number, m: number): number => {
  return ((n % m) + m) % m;
}

export const isLowerCase = (char: string) => char.toLowerCase() === char

export const caesarCipherEncrypt = (value: string, index: number, alphabet: string[] = ALPHABET) => {
  return Array
    .from(value)
    .map((char: string) => {
      const charIndex = alphabet.indexOf(char.toLowerCase())
      if (charIndex === -1) return char

      const result = alphabet[mod((charIndex + index), ALPHABET_SIZE)]
      return isLowerCase(char) ? result : result?.toUpperCase()
    })
    .join("")
}

export const caesarCipherDecrypt = (value: string, index: number, alphabet: string[] = ALPHABET) =>
  caesarCipherEncrypt(value, -index, alphabet)
