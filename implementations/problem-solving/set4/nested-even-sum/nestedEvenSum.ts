type Value = any

const isEven = (num: number): boolean => num % 2 === 0
const isNumber = (value: Value): boolean => typeof value === "number"
const isObject = (value: Value): boolean => typeof value === "object" && value !== null && !Array.isArray(value)

export const nestedEvenSum = (value: Value, sum: number = 0): number => {
  for (let key in value) {
    if (isObject(value[key])) {
      sum += nestedEvenSum(value[key])
    }

    if (isNumber(value[key]) && isEven(value[key])) {
      sum += value[key]
    }
  }

  return sum
}
