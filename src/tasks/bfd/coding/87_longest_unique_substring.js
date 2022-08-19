/**
 * @param {string} str
 * @return {string}
 */
function longestUniqueSubstr(str) {
    const characterSet = new Set();
    let result = '';

    for (let i = 0; i < str.length; i++) {
        if (characterSet.has(str[i])) {
            if (characterSet.size > result.length) {
                result = Array.from(characterSet).join('');
            }
            characterSet.clear();
            continue;
        }

        characterSet.add(str[i]);
    }

    return result;
}
