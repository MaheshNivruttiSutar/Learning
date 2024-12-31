//Given a linked list, determine if it has a cycle in it.
//Follow up:
//Can you solve it without using extra space?

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function hasCycle(head) {
    if (!head || !head.next) return false; // Empty list or single node list

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;           // Move slow pointer by 1
        fast = fast.next.next;     // Move fast pointer by 2

        if (slow === fast) {       // Check if both pointers meet
            return true;           // Cycle detected
        }
    }

    return false;                  // No cycle detected
}

// Example usage
const head = new ListNode(3);
head.next = new ListNode(2);
head.next.next = new ListNode(0);
head.next.next.next = new ListNode(-4);
head.next.next.next.next = head.next; // Creates a cycle

console.log(hasCycle(head)); // Output: true
