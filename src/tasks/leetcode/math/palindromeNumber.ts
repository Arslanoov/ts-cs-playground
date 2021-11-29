function isPalindrome(x: number): boolean {
  if (x < 0) return false
  let num: number = x
  let reverse: number = 0
  let mod: number = 0

  while (num !== 0) {
    mod = num % 10
    reverse = reverse * 10 + mod
    num = Math.floor(num / 10)
  }

  return reverse === x
}