//Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
//push(x) -- Push element x onto stack.
//pop() -- Removes the element on top of the stack.
//top() -- Get the top element.
//getMin() -- Retrieve the minimum element in the stack.

class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(x) {
        this.stack.push(x);
        if (this.minStack.length === 0) {
            this.minStack.push(x);
        } else {
            this.minStack.push(Math.min(x, this.minStack[this.minStack.length - 1]));
        }
    }

    pop() {
        if (this.stack.length === 0) return; // Handle empty stack
        this.stack.pop();
        this.minStack.pop();
    }

    top() {
        if (this.stack.length === 0) return null; // Handle empty stack
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        if (this.minStack.length === 0) return null; // Handle empty stack
        return this.minStack[this.minStack.length - 1];
    }
}

// Example usage
const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // Output: -3
minStack.pop();
console.log(minStack.top());    // Output: 0
console.log(minStack.getMin()); // Output: -2
