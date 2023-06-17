/**
 * @param {number} base
 * @param {number} power - integer
 * @return {number}
 */
function pow(base, power) {
  if (power < 1) {
    return 1 / powRecursion(base, -power);
  }

  return powRecursion(base, power);
}

function powRecursion(base, power) {
  if (power === 0) return 1;
  if (power === 1) return base;

  const half = pow(base, Math.floor(power / 2));
  return power % 2 === 0 ? half * half : base * half * half;
}
