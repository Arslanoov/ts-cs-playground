/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @param options
 * @param {boolean} options.leading
 * @param {boolean} options.trailing
 * @returns {(...args: any[]) => any}
 */
function throttle(func, wait, options = { leading: true, trailing: true }) {
  let isThrottling = false
  let savedArgs = null
  let savedContext = null

  return function throttleFunc(...args) {
    if (isThrottling) {
      savedArgs = args
      savedContext = this
      return
    }

    isThrottling = true
    if (
      options.leading ||
      (options.trailing && savedArgs)
    ) {
      func.apply(this, args)
    }

    setTimeout(() => {
      isThrottling = false
      if (options.trailing && savedArgs) {
        throttleFunc.apply(savedContext, savedArgs)
        savedArgs = null
        savedContext = null
      }
    }, wait)
  }
}
