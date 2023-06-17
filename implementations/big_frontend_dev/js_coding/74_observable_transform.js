/**
 * @param {any} input
 * @return {(observable: Observable) => Observable}
 * returns a function which trasnform Observable
 */
function map(transform) {
  return (observable) => {
    return new Observable((sub) => {
      observable.subscribe(transform(sub))
    })
  }
}
