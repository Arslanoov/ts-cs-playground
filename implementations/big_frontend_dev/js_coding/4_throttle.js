/**
 * @param {Function} func
 * @param {number} wait
 */
function throttle(func, wait) {
  let isHappening = true
  let args = null

  return function (...params) {
    if (isHappening) {
      isHappening = false
      func.apply(this, params)

      window.setTimeout(() => {
        isHappening = true
        args && func.apply(this, args)
      }, wait)
    } else {
      args = [...params]
    }
  }
}
