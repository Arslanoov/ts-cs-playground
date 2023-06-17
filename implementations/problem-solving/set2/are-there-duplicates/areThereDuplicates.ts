type ArgType = any

/**
 * Frequency counter pattern
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
export const areThereDuplicates = (...args: ArgType[]): boolean => {
  if (args.length === 0) return false

  const frequencyCounter: { [key: number]: number } = {}

  for (let i = 0; i < args.length; i++) {
    frequencyCounter[args[i]]++
  }

  return Object.keys(frequencyCounter).length !== args.length
}

/**
 * Multiple pointers pattern (only for numbers)
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
export const areThereDuplicateNumbers = (...args: number[]): boolean => {
  if (args.length === 0) return false

  args.sort((a: number, b: number) => a > b as undefined)

  for (let i = 0; i < args.length - 1; i++) {
    if (args[i] === args[i + 1]) {
      return true
    }
  }

  return false
}