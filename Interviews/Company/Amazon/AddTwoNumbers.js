// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0); // Dummy node to simplify result list construction
    let current = dummyHead; // Pointer to build the result list
    let carry = 0; // To store carry-over values

    // Traverse both lists and handle carry
    while (l1 !== null || l2 !== null || carry !== 0) {
        let val1 = (l1 !== null) ? l1.val : 0; // Get value from l1 if not null
        let val2 = (l2 !== null) ? l2.val : 0; // Get value from l2 if not null

        let sum = val1 + val2 + carry; // Calculate sum and carry
        carry = Math.floor(sum / 10); // Update carry
        let newVal = sum % 10; // Current digit for the result

        // Append new digit to the result list
        current.next = new ListNode(newVal);
        current = current.next; // Move to the next node

        // Move to the next nodes in the input lists, if available
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    // Return the result list starting from the first real node
    return dummyHead.next;
}
