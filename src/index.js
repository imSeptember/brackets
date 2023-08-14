module.exports = function check(str, bracketsConfig) {
    const stack = [];
    const openingBrackets = new Set();
    const closingBrackets = new Set();
    const matchingBrackets = {};

    for (let pair of bracketsConfig) {
        openingBrackets.add(pair[0]);
        closingBrackets.add(pair[1]);
        matchingBrackets[pair[1]] = pair[0];
    }

    for (let char of str) {
        if (openingBrackets.has(char)) {
            if (stack.length > 0 && stack[stack.length - 1] === char && matchingBrackets[char] === char) {
                stack.pop(); // Remove the matching opening bracket
            } else {
                stack.push(char);
            }
        } else if (closingBrackets.has(char)) {
            if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}
