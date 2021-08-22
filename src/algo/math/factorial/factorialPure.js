export const fac = (num) => num > 1 ? num * fac(num - 1) : 1
export const facIterative = (num) => {
  let fac = 1

  for (let i = num; i > 1; i--) {
    fac *= i
  }

  return fac
}
