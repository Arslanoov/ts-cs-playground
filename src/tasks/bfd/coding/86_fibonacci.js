/**
 * @param {number} n - non-negative integer
 * @return {number}
 */
function fib(n) {
  if (n <= 1) return n;

  let first = 0;
  let second = 1;

  for (let i = 2; i <= n; i++) {
    let current = first + second;
    first = second;
    second = current;
  }

  return second;
}
