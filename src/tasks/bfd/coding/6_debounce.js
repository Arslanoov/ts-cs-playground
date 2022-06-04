/**
 * @param {Function} func
 * @param {number} wait
 */
function debounce(func, wait) {
  let timeoutId = null
  return function (...params) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func.apply(this, params), wait)
  }
}