function letterCombinations(digits: string): string[] {
  if (digits.length === 0) return []

  const map: {
    [key: string]: string[]
  } = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"]
  };

  const combinations: string[] = []

  function combinationRecursive(str: string, index: number) {
    if (digits.length === index) {
      combinations.push(str)
      return
    }

    map[digits[index]].forEach((newChar) => combinationRecursive(`${str}${newChar}`, index + 1))
  }

  combinationRecursive("", 0)

  return combinations
}