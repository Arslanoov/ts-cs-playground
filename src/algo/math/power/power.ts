// O(log(n))

export const power = (base: number, index: number): number => {
  // n^0 = 1
  if (index === 0) return 1
  if (index % 2 === 0) {
    const temp = power(base, index / 2)
    return temp * temp
  }

  const temp = power(base, Math.floor(index / 2))
  return temp * temp * base
}
