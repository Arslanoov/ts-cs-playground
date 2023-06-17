/**
 * @param {any} data
 * @param command
 */
function update(data, command) {
    for (const [key, value] of Object.entries(command)) {
        switch (key) {
            case '$push':
                return [...data, ...value];

            case '$set':
                return value;

            case '$merge':
                if (!(data instanceof Object)) {
                    throw new Error();
                }


                return {...data, ...value};

            case '$apply':
                return value(data);

            default:
                if (Array.isArray(data)) {
                    const result = [...data];
                    result[key] = update(data[key], value);
                    return result;
                } else {
                    return {
                        ...data,
                        [key]: update(data[key], value)
                    };
                }
        }
    }
}

