const symbols = {
  "M": 1000,
  "CM": 900,
  "D": 500,
  "CD": 400,
  "C": 100,
  "XC": 90,
  "L": 50,
  "XL": 40,
  "X": 10,
  "IX": 9,
  "V": 5,
  "IV": 4,
  "I": 1,
}

/**
 * @param {string} s - roman numeral string
 * @returns {number} integer
 */
function romanToInteger(s) {
  let sum = 0
  for (let i = 0; i < s.length; i++) {
    if (symbols[`${s[i]}${s[i + 1]}`]) {
      sum += symbols[`${s[i]}${s[i + 1]}`]
      i++
    } else {
      sum += symbols[s[i]]
    }
  }
  return sum
}