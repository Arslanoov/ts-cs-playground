/**
 * @param {number} num
 */
function sum(num) {
  const add = (num2) => {
    return sum(num + num2)
  }

  add.toString = () => num

  return add
}