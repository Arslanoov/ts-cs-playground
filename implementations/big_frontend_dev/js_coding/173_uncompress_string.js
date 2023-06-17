/**
 * @param {string} str
 * @returns {string}
 */
function uncompress(str) {
    const stack = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ')') {
            let word = '';
            let count = '';

            while (stack.length > 0 && stack[stack.length - 1] !== '(') {
                word = `${stack.pop()}${word}`;
            }

            stack.pop();

            while (stack.length > 0 && isFinite(stack[stack.length - 1])) {
                count = stack.pop() + count;
            }

            stack.push(word.repeat(Number(count)));
        } else {
            stack.push(str[i]);
        }
    }

    return stack.join('');
}
