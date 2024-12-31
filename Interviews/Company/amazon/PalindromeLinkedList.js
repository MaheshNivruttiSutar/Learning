class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function isPalindrome(head) {
    if (head === null || head.next === null) return true;

    // Step 1: Find the middle of the linked list
    const middle = findMiddle(head);

    // Step 2: Reverse the second half
    const secondHalf = reverse(middle.next);

    // Step 3: Compare the first half and the reversed second half
    let firstHalf = head;
    let secondHalfCopy = secondHalf; // For restoring the list later if needed
    let isPalindrome = true;

    while (secondHalf !== null) {
        if (firstHalf.val !== secondHalf.val) {
            isPalindrome = false;
            break;
        }
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }

    // Restore the list (optional)
    middle.next = reverse(secondHalfCopy);

    return isPalindrome;
}

function findMiddle(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

function reverse(head) {
    let prev = null;
    let curr = head;
    while (curr !== null) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

// Example usage
const head = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))));

console.log(isPalindrome(head)); // Output: true
