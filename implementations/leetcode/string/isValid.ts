const bracketsMap: {
  [key: string]: string
} = {
  "}": "{",
  ")": "(",
  "]": "["
}

function isValid(s: string): boolean {
  // Stack
  const brackets: string[] = []
  for (let i = 0; i < s.length; i++) {
    if (!bracketsMap[s[i]]) {
      brackets.push(s[i])
    } else if (brackets.pop() !== bracketsMap[s[i]]) {
      return false
    }
  }

  return brackets.length === 0
}