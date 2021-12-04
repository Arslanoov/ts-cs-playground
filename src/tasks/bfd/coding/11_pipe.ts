/**
 * @param {Array<(arg: any) => any>} funcs
 * @return {(arg: any) => any}
 */
function pipe(funcs) {
  return (x) => funcs.reduce((acc, item) => {
    return item(acc)
  }, x)
}