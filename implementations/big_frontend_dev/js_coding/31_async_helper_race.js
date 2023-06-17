/**
 * @param {Array.<Function>} funcs
 * @return {(callback: Callback) => void}
 */
function race(funcs) {
    let isFinished = false;

    return function (cb) {
        const fnWrapper = (...args) => {
            if (isFinished) return;
            cb(...args);
            isFinished = true;
        };

        for (let func of funcs) {
            func(fnWrapper);
        }
    }
}