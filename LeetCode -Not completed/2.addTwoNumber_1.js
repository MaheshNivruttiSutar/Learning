class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let dummyHead = new ListNode();
    let current = dummyHead;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry !== 0) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;

        let sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummyHead.next;
};

// Helper function to create a linked list from an array of digits
function createLinkedList(arr) {
    let dummyHead = new ListNode();
    let current = dummyHead;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummyHead.next;
}

// Helper function to print a linked list
function printLinkedList(node) {
    let output = [];
    while (node !== null) {
        output.push(node.val);
        node = node.next;
    }
    console.log(output.join(' -> '));
}

// Example usage:
let l1 = createLinkedList([2, 4, 3]); // Represents number 342
let l2 = createLinkedList([5, 6, 4]); // Represents number 465

let result = addTwoNumbers(l1, l2);   // Should represent the number 807
printLinkedList(result);              // Output: 7 -> 0 -> 8
