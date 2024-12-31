class GenerateParentheses {
    generateParenthesis(n) {
        const result = [];
        this.generateParenthesisRecursive(result, "", 0, 0, n);
        return result;
    }

    generateParenthesisRecursive(result, current, open, close, n) {
        // If the current string has reached the maximum length
        if (current.length === n * 2) {
            result.push(current);
            return;
        }

        // If we can add an opening parenthesis
        if (open < n) {
            this.generateParenthesisRecursive(result, current + "(", open + 1, close, n);
        }

        // If we can add a closing parenthesis
        if (close < open) {
            this.generateParenthesisRecursive(result, current + ")", open, close + 1, n);
        }
    }
}

// Example Usage
const generator = new GenerateParentheses();
console.log(generator.generateParenthesis(3)); // Output: ["((()))","(()())","(())()","()(())","()()()"]
