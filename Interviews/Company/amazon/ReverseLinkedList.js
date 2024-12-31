// Reverse a singly linked list.


class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function reverseList(head) {
    let prev = null;
    let curr = head;

    while (curr !== null) {
        let next = curr.next; // Store the next node
        curr.next = prev;     // Reverse the current node's pointer
        prev = curr;          // Move prev to the current node
        curr = next;          // Move to the next node
    }

    return prev; // prev is the new head of the reversed list
}

// Example usage
const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

let reversedHead = reverseList(head);

// Print reversed list
let curr = reversedHead;
while (curr !== null) {
    console.log(curr.val); // Output: 5 4 3 2 1
    curr = curr.next;
}
