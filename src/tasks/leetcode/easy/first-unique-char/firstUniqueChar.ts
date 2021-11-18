function firstUniqChar(s: string): number {
  const counter: {
    [key: number]: number
  } = {}

  for (let i = 0; i < s.length; i++) {
    counter[s[i]] = (counter[s[i]] ?? 0) + 1
  }

  for (let j = 0; j < s.length; j++) {
    if (counter[s[j]] === 1) {
      return j
    }
  }

  return -1
}