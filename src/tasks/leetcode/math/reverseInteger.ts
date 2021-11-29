function reverse(x: number): number {
  const num = Number(Math.abs(x).toString().split("").reverse().join(""))
  const isNegative = x < 0
  if (num > 0x7FFFFFFF) {
    return 0
  }

  return isNegative ? -num : num
}