/**
 * @param {string} input
 * @returns string
 */
function removeChars(input) {
    const stack = [];

    for (let i = 0; i < input.length; i++) {
        if (stack.length > 0 && stack[stack.length - 1] === 'a' && input[i] === 'c') {
            stack.pop()
        } else if (input[i] !== 'b') {
            stack.push(input[i])
        }
    }

    return stack.join('');
}
