const ALPHABET_SIZE = 26
const FIRST_CODE = 'a'.charCodeAt(0)

function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) return false

  let match: boolean = true
  const stringMap1: number[] = new Array(ALPHABET_SIZE).fill(0)
  const stringMap2: number[] = new Array(ALPHABET_SIZE).fill(0)

  for (let i = 0; i < s1.length; i++) {
    stringMap1[s1[i].charCodeAt(0) - FIRST_CODE]++
    stringMap2[s2[i].charCodeAt(0) - FIRST_CODE]++
  }

  for (let i = 0; i < s2.length - s1.length; i++) {
    match = true
    for (let j = 0; j < ALPHABET_SIZE; j++) {
      if (stringMap1[j] !== stringMap2[j]) {
        match = false
        break
      }
    }

    if (match) {
      return true
    }

    // Shift
    stringMap2[s2[i + s1.length].charCodeAt(0) - FIRST_CODE]++
    stringMap2[s2[i].charCodeAt(0) - FIRST_CODE]--
  }

  for (let i = 0; i < ALPHABET_SIZE; i++) {
    if (stringMap1[i] !== stringMap2[i]) {
      return false
    }
  }

  return true
}