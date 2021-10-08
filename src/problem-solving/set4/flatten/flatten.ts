type Value = any

export const flatten = (items: Value[]): Value[] =>
  items.toString().split(",").map((item) => Number(item))
