export const reverse = (string: string, joined: string = ""): string => {
  if (string.length === 0) return joined
  return reverse(string.slice(1), string[0] + joined)
}
