/**
 * @param {string} v1
 * @param {string} v2
 * @returns 0 | 1 | -1
 */
function compare(v1, v2) {
    const v1Parsed = v1.split('.').map(Number);
    const v2Parsed = v2.split('.').map(Number);

    for (let i = 0; i < 3; i++) {
        if (v1Parsed[i] > v2Parsed[i]) {
            return 1;
        } else if (v1Parsed[i] < v2Parsed[i]) {
            return -1;
        }
    }

    return 0;
}
