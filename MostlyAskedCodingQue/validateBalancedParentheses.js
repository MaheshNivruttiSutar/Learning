//****  Validate Balanced Parentheses ****//
/* Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. */

/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of s) {
        if (char in map) {
            // If the character is an opening bracket, push its corresponding closing bracket onto the stack
            stack.push(map[char]);
        } else {
            // If the character is a closing bracket, check if it matches the top of the stack
            if (stack.length === 0 || stack.pop() !== char) {
                return false;
            }
        }
    }

    // The string is valid if the stack is empty (all brackets were properly matched)
    return stack.length === 0;
}

// Example usage:
console.log(isValid("()"));         // Output: true
console.log(isValid("()[]{}"));     // Output: true
console.log(isValid("(]"));
