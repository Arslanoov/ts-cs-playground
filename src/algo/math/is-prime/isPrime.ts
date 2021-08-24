export const isPrime = (num: number): boolean => {
  if (num % 1 !== 0 || num <= 1) return false
  if (num <= 3) return true
  if (num % 2 === 0) return false

  const lim = Math.sqrt(num)
  for (let div = 3; div <= lim; div += 2) {
    if (num % div === 0) return false
  }

  return true
}
