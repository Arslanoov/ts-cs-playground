/**
 * @param {Function} constructor
 * @param {any[]} args - argument passed to the constructor
 * `myNew(constructor, ...args)` should return the same as `new constructor(...args)`
 */
const myNew = (constructor, ...args) => {
    const context = Object.create(constructor.prototype);

    const createdObject = constructor.apply(context,args);

    if (createdObject && createdObject instanceof Object) {
        return createdObject;
    } else {
        return context;
    }
}
