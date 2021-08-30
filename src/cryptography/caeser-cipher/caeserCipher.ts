// TODO: Fix bugs

const alp = "abcdefghijklmnopqrstuvwxyz".split('')

export const isUpperCase = (char: string) => char.toUpperCase() === char

export const caeserCipherEncrypt = (value: string, index: number, alphabet: string[] = alp) => {
  return Array
    .from(value)
    .map((char: string) => {
      const newChar = alphabet.indexOf(char.toLowerCase()) ?
        alphabet[(alphabet.indexOf(char.toLowerCase()) + index) % alphabet.length] :
        char
      return isUpperCase(char) ? newChar.toUpperCase() : newChar
    })
    .join('')
}

export const caeserCipherDecrypt = (value: string, index: number, alphabet: string[] = alp) => {
  return Array
    .from(value)
    .map((char: string) => {
      const newChar = alphabet.indexOf(char.toLowerCase()) ?
        alphabet[(alphabet.indexOf(char.toLowerCase()) - index) % alphabet.length] :
        char
      return isUpperCase(char) ? newChar.toUpperCase() : newChar
    })
    .join('')
}
