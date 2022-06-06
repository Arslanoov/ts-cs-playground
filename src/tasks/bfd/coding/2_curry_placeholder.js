/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
  return function carriedFn(...params) {
    if (params.length >= fn.length && !params.includes(curry.placeholder)) {
      return fn(...params)
    } else {
      return function(...args) {
        return carriedFn(
          ...params.map((item) => item === curry.placeholder ? args.shift() : item),
          ...args
        )
      }
    }
  }
}


curry.placeholder = Symbol()