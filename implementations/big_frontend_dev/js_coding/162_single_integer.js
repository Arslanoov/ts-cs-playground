/**
 * @param {number[]} arr
 * @returns number
 */
function findSingle(arr) {
    const counter = {};

    arr.forEach((item) => counter[item] ? counter[item]++ : counter[item] = 1);

    return Number(Object.keys(counter).find((item) => counter[item] === 1));
}

