/**
 * @param {string} str
 * @returns {boolean}
 */
function validateNumberString(str) {
    return !isNaN(str) && str.length !== 0;
}
