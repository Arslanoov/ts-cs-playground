/**
 * @param {string} str
 * @return {string}
 */
function compress(str) {
    let count = 1;
    let result = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            result += str[i];
            if (count !== 1) result += String(count);
            count = 1;
        }
    }

    return result;
}
