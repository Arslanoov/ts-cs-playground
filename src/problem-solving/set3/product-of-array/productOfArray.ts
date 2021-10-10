export const productOfArray = (input: number[], product: number = 1): number | null =>
  input.length === 0 ? product : productOfArray(input.slice(1), product * input[0])
