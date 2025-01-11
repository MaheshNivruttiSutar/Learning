//Given a linked list, determine if it has a cycle in it.
//Follow up:
//Can you solve it without using extra space?
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */


class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    hasCycle(head) {
        if (head === null || head.next === null) {
            return false;
        }

        let slow = head;
        let fast = head.next;

        while (fast !== null && fast.next !== null && fast !== slow) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return fast === slow;
    }
}

// Example Usage:

// Create a linked list: 3 -> 2 -> 0 -> -4
const head = new ListNode(3);
const second = new ListNode(2);
const third = new ListNode(0);
const fourth = new ListNode(-4);

// Link the nodes
head.next = second;
second.next = third;
third.next = fourth;

// Create a cycle: -4 points back to 2
fourth.next = second;

// Initialize the solution
const solution = new Solution();

// Check for cycle
const result = solution.hasCycle(head);
console.log(result); // Output: true
