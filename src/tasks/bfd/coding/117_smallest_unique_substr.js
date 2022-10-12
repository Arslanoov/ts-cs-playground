/**
 * @param {string} str
 * @return {string}
 */
function smallestUniqueSubstr(str) {
  const items = new Set();
  let current = str[str.length - 1];

  if (str.length === 0) return str;

  items.add(current);
  for (let i = str.length - 2; i >= 0; i--) {
    let char = str[i];
    if (!items.has(char) || char < current) {
      items.delete(char);
      items.add(char);
      current = char;
    }
  }

  return Array.from(items).reverse().join('');
}
