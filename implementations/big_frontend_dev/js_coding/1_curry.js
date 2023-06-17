/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
  return function curryFn(...params) {
    if (params.length >= fn.length) {
      return fn(...params)
    } else {
      return function (...params2) {
        return curryFn.apply(this, params.concat(...params2))
      }
    }
  }
}