/**
 * @param {any} data
 * @return {string}
 */
function stringify(data) {
    if (data instanceof Date) {
        return `"${data.toISOString()}"`;
    }

    if (Array.isArray(data)) {
        return `[${data.map((item) => stringify(item)).join(',')}]`;
    }

    if (
        data === null ||
        data === undefined ||
        data === Infinity ||
        data === -Infinity ||
        data !== data
    ) {
        return 'null';
    }

    switch (typeof data) {
        case 'string':
            return `"${data}"`;

        case 'symbol':
            return 'null';

        case 'function':
            return;

        case 'number':
        case 'boolean':
            return `${data}`;

        case 'object':
            return `{${Object.entries(data).reduce((acc, [k, v]) => {
                if (v === undefined) return acc;
                acc.push(`"${k}":${stringify(v)}`);
                return acc;
            }, []).join(',')}}`;

        case 'bigint':
            throw new Error();
    }
}
