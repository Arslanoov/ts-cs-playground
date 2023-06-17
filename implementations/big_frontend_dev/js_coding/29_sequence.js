/**
 * @param funcs {Array.<Object>}
 * @return {(callback: Callback) => void}
 */
function sequence(funcs) {
    return function (cb, data) {
        let i = 0;

        const sequenceFunc = (data) => {
            if (funcs.length === i) {
                cb(undefined, data);
                return;
            }

            const lastFunc = funcs[i++]

            const funcCb = (error, newData) => error ? cb(error) : sequenceFunc(newData);
            lastFunc(funcCb, data);
        }

        sequenceFunc(data);
    }
}
