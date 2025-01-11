// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

//Stack-Based Approach
/*
The stack data structure is ideal for this problem because it follows the Last In,
First Out (LIFO) principle, which matches how nested brackets should be closed.
*/
console.log(isValid("([])"));
function isValid(s) {
    // Stack to keep track of opening brackets
    const stack = [];
    // Hash map to store the mapping of closing to opening brackets
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    // Iterate through each character in the string
    for (let char of s) {
        // If the character is a closing bracket
        if (char in bracketMap) {
            // Pop the top element from the stack if it's not empty, else assign a dummy value
            const topElement = stack.length === 0 ? '#' : stack.pop();
            console.log("topElement",topElement);
            console.log("bracketMap[char]",bracketMap[char]);
            // Check if the popped element matches the corresponding opening bracket
            if (topElement !== bracketMap[char]) {
                return false; // Invalid if it doesn't match
            }
        } else {
            // If it's an opening bracket, push it onto the stack
            stack.push(char);
        }
    }

    // If the stack is empty, all brackets were matched correctly
    return stack.length === 0;
}


// Example usage
// console.log(isValid("()"));       // Output: true
// console.log(isValid("()[]{}"));   // Output: true
// console.log(isValid("(]"));       // Output: false
// console.log(isValid("([)]"));     // Output: false
// console.log(isValid("{[]}"));     // Output: true
