// TODO: Add O notation
export const power = (base: number, exp: number): number | null => {
  if (exp < 0) return null
  if (exp === 0) return 1
  if (exp === 1) return base

  return base * power(base, exp - 1)
}
