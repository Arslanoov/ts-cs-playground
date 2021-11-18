function canConstruct(ransomNote: string, magazine: string): boolean {
  if (magazine.length < ransomNote.length) return false

  const counter: {
    [key: number]: number
  } = {}

  for (let i = 0; i < ransomNote.length; i++) {
    counter[ransomNote[i]] = (counter[ransomNote[i]] ?? 0) + 1
  }

  for (let j = 0; j < magazine.length; j++) {
    if (counter[magazine[j]]) {
      counter[magazine[j]]--
    }
  }

  return !Object.values(counter).some((value) => value !== 0)
}