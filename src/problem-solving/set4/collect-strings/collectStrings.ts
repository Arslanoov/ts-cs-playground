/**
 * TODO: Add O notation for all recursive solutions
 */

const isString = (value: Value): boolean => typeof value === "string"
const isObject = (value: Value): boolean => typeof value === "object" && value !== null && !Array.isArray(value)

type Value = any

export const collectStrings = (value: Value): string[] => {
  let strings: string[] = []

  for (let key in value) {
    if (isObject(value[key])) {
      strings = strings.concat(collectStrings(value[key]))
    } else if (isString(value[key])) {
      strings.push(value[key])
    }
  }

  return strings
}
