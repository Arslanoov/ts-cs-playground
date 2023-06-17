type Value = any

const isNumber = (value: Value): boolean => typeof value === "number"
const isObject = (value: Value): boolean => typeof value === "object" && value !== null && !Array.isArray(value)

export const stringifyNumbers = (value: Value): Value => {
  const stringifyObject: Value = {}

  for (let key in value) {
    if (isObject(value[key])) {
      stringifyObject[key] = stringifyNumbers(value[key])
    } else if (isNumber(value[key])) {
      stringifyObject[key] = value[key].toString()
    } else {
      stringifyObject[key] = value[key]
    }
  }

  return stringifyObject
}
