/**
 * @param {string} str
 * @return {string | null}
 */
function firstDuplicate(str) {
  const chars = new Set();

  for (let i = 0; i < str.length; i++) {
    if (chars.has(str[i])) {
      return str[i];
    }
    chars.add(str[i]);
  }

  return null;
}