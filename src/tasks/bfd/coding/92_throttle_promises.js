/**
 * @param {() => Promise<any>} func
 * @param {number} max
 * @return {Promise}
 */
async function throttlePromises(funcs, max) {
    const result = [];
    let current = 0;

    while (result.length < funcs.length) {
        let partResult = [];

        try {
            partResult = await Promise.all(funcs.slice(current, current + max).map((func) => func()));
        } catch (e) {
            throw e;
        }

        result.push(...partResult);

        current += max;
    }

    return result;
}
