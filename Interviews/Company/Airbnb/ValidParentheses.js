// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

function isValid(s) {
    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (const char of s) {
        if (char in map) {
            // If the stack is empty or the top element doesn't match the expected opening bracket
            if (stack.length === 0 || stack.pop() !== map[char]) {
                return false;
            }
        } else {
            // If it's an opening bracket, push it onto the stack
            stack.push(char);
        }
    }

    // If the stack is empty, all brackets were matched
    return stack.length === 0;
}

// Example usage
console.log(isValid("()"));      // Output: true
console.log(isValid("()[]{}"));  // Output: true
console.log(isValid("(]"));      // Output: false
console.log(isValid("([)]"));    // Output: false
console.log(isValid("{[]}"));    // Output: true
