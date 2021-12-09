/**
 * @param {(...args) => void} func
 * @returns {(...args) => Promise<any}
 */
function promisify(func) {
  return function (...args) {
    return new Promise(async (resolve, reject) => {
      function callback(err, result) {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      }

      args.push(callback)

      func.apply(this, args)
    })
  }
}