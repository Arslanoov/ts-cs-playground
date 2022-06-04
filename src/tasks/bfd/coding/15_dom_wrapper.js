/**
 * @param {HTMLElement} el - element to be wrapped
 */
function $(el) {
  return {
    css(attr, value) {
      el.style[attr] = value
      return this
    }
  }
}