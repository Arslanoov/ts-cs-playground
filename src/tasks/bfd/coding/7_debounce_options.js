/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @param {boolean} options.leading
 * @param {boolean} options.trailing
 * @returns {(...args: any[]) => any}
 */
function debounce(func, wait, options = { leading: false, trailing: true }) {
  let id = null
  let savedArgs = null

  if (!options.leading && !options.trailing) return () => false

  return function debounceFunc(...args) {
    if (options.leading && !id) {
      func.apply(this, args)
    } else {
      savedArgs = args
    }

    clearTimeout(id)

    id = setTimeout(() => {
      if (options.trailing && savedArgs) {
        func.apply(this, savedArgs)
      }

      savedArgs = null
      id = null
    }, wait)
  }
}
