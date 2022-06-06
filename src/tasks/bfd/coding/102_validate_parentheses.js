const brackets = {
  '{': '}',
  '[': ']',
  '(': ')'
};

/**
 * @param {string} str
 * @return {boolean}
 */
function validate(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (brackets[str[i]]) {
      stack.push(str[i]);
    } else if (brackets[stack.pop()] !== str[i]) {
      return false;
    }
  }

  return stack.length === 0;
}