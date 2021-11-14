function reverseWords(s: string): string {
  let res: string = ""
  const words = s.split(" ")

  for (let word of words) {
    res += word.split("").reverse().join("") + " "
  }

  return res.trim()
}