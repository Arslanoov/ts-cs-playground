export const hash = (key, bucketsCount) => {
  const hashed = Array.from(key).reduce(
    (acc, key) => (acc + key.charCodeAt(0)),
    0
  )
  return hashed % bucketsCount
}
