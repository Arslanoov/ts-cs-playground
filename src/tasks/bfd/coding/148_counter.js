/**
 * @returns { {count: number}}
 */
function createCounter() {
  return {
    data: -1,

    get count() {
      this.data++
      return this.data
    }
  }
}