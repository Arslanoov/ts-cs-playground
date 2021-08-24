export const isPositive = (num: number): boolean => num !== 0 && ((num >> 31) & 1) === 0
