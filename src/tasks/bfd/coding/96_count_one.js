/**
 * @param {number} num - integer
 * @return {number} count of 1 bit
 */
function countOne(num) {
    let result = 0;

    while (num >= 1) {
        result += num % 2;
        num = Math.floor(num / 2);
    }

    return result;
}
