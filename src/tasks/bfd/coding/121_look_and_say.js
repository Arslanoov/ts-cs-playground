/**
 * @param {number} n - integer
 * @returns {string}
 */
function getNthNum(n) {
  let result = "1";

  for (let i = 2; i <= n; i++) {
    let temp = "";
    let k = 0;

    for (let j = 0; j <= result.length; j++) {
      if (result[j] !== result[k]) {
        temp += `${j - k}${result[k]}`;
        k = j;
      }
    }

    result = temp;
  }

  return result;
}
