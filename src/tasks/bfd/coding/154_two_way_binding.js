/**
 * @param {{value: string}} state
 * @param {HTMLInputElement} element
 */
function model(state, element) {
  element.value = state.value;

  Object.defineProperty(state, 'value', {
    get: () => element.value,
    set: (value) => element.value = value
  })
}
