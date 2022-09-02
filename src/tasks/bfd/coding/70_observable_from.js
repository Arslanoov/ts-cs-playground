/**
 * @param {Array | ArrayLike | Promise | Iterable | Observable} input
 * @return {Observable}
 */
function from(input) {
    if (Array.isArray(input) || input[Symbol.iterator] instanceof Function) {
        return new Observable((sub) => {
            try {
                for (let item of input) {
                    sub.next(item);
                }
            } catch (e) {
                sub.error(e);
            }

            sub.complete();
        });
    }

    if (input instanceof Promise) {
        return new Observable((sub) => {
            input
                .then((v) => sub.next(v))
                .catch((e) => sub.error(e))
                .finally(() => sub.complete())
        });
    }

    if (input instanceof Observable) {
        return new Observable((sub) => input.subscribe(sub));
    }

    if ('length' in input) {
        return new Observable((sub) => {
            try {
                for (let i = 0; i < input.length; i++) {
                    sub.next(input[i]);
                }
            } catch (e) {
                sub.error(e);
            }

            sub.complete();
        });
    }

    throw new Error('Unsupported type');
}
