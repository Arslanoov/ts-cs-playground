/**
 * Solution with frequency counter
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {string} str
 * @returns {string | string[]}
 */
function count(str) {
  const counter = {};

  for (let i = 0; i < str.length; i++) {
    counter[str[i]] = counter[str[i]] ? counter[str[i]] + 1 : 1;
  }

  const result = [];
  const maxCount = Math.max(...Object.values(counter));

  for (key in counter) {
    if (counter[key] === maxCount) {
      result.push(key);
    }
  }

  return result.length === 1 ? result[0] : result;
}
