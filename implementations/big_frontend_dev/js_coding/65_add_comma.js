/**
 * @param {number} num
 * @return {string}
 */
function addComma(num) {
    const str = String(num);
    let result = '';

    let commaIndex = str.indexOf('.');
    if (commaIndex === -1) {
        commaIndex = str.length;
    }

    for (let i = commaIndex; i >= 0; i--) {
        if ((commaIndex - i - 1) !== 0 && (commaIndex - i - 1) % 3 === 0) {
            result = `,${result}`;
        }

        result = `${str[i] ?? ''}${result}`;
    }

    return `${result}${str.substring(commaIndex + 1)}`;
}
