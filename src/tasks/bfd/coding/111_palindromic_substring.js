/**
 * @param {string} str
 * @return {number}
 */
function countPalindromicSubstr(str) {
  let count = 0;

  for (let i = 0; i < str.length; i += 0.5) {
    let start = Math.floor(i);
    let end = Math.ceil(i);

    while (start >= 0 && end < str.length) {
      if (str[start] !== str[end]) break;
      start--;
      end++;
      count++;
    }
  }

  return count;
}
