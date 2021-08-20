export const hash = (key: string, bucketsCount: number): number => {
  const hashed = Array.from(key).reduce(
    (acc, key) => (acc + key.charCodeAt(0)),
    0
  )
  return hashed % bucketsCount
}
