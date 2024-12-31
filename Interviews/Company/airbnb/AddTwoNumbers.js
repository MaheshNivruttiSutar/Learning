// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */


class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class AddTwoNumbers {
    addTwoNumbers(l1, l2) {
        let current1 = l1;
        let current2 = l2;

        let head = new ListNode(0);  // Dummy node
        let currentHead = head;

        let sum = 0;

        while (current1 !== null || current2 !== null) {
            sum = Math.floor(sum / 10);  // Move the carry to the next iteration

            if (current1 !== null) {
                sum += current1.val;
                current1 = current1.next;
            }

            if (current2 !== null) {
                sum += current2.val;
                current2 = current2.next;
            }

            currentHead.next = new ListNode(sum % 10);  // Create a new node with the digit value
            currentHead = currentHead.next;  // Move to the next node
        }

        if (Math.floor(sum / 10) === 1) {
            currentHead.next = new ListNode(1);  // Add the final carry if it exists
        }

        return head.next;  // Return the resulting linked list, skipping the dummy node
    }
}

// // Create nodes
// let l1 = new ListNode(2);
// l1.next = new ListNode(4);
// l1.next.next = new ListNode(3);

// // Now l1 represents the linked list 2 -> 4 -> 3

// let adder = new AddTwoNumbers();
// let result = adder.addTwoNumbers(l1, l2);



let l1 = new ListNode(3, new ListNode(4, new ListNode(2)));  // Represents 243
let l2 = new ListNode(4, new ListNode(6, new ListNode(5)));  // Represents 564

let adder = new AddTwoNumbers();
let result = adder.addTwoNumbers(l1, l2);
console.log("Result",result);

// Print the result linked list
while (result !== null) {
    console.log(result.val);  // Should print 7 -> 0 -> 8 (which represents 807)
    result = result.next;
}

