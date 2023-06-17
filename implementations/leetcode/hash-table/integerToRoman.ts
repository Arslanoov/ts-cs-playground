const symbols = {
  1000: "M",
  900: "CM",
  500: "D",
  400: "CD",
  100: "C",
  90: "XC",
  50: "L",
  40: "XL",
  10: "X",
  9: "IX",
  5: "V",
  4: "IV",
  1: "I",
}

function intToRoman(num: number): string {
  let str = ""

  let current = num
  let count: number = 0
  const keys = Object.keys(symbols).reverse()
  for (let num of keys) {
    if (current === 0) break
    count = Math.floor(current / Number(num))
    if (count >= 1) {
      str += symbols[num].repeat(count)
      current -= count * Number(num)
    }
  }

  return str
}