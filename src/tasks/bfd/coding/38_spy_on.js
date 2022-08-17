/**
 * @param {object} obj
 * @param {string} methodName
 */
function spyOn(obj, methodName) {
    const calls = [];

    obj[methodName] = new Proxy(obj[methodName], {
        apply: (fn, context, args) => {
            calls.push(args);
            return fn.apply(context, args);
        }
    });

    return { calls };
}
