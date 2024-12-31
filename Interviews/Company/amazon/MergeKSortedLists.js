// Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

//Method 1
//1. Min-Heap (Priority Queue) Approach
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeKLists(lists) {
    const MinHeap = require('collections/heap'); // Ensure to install 'collections' package
    const heap = new MinHeap([], null, (a, b) => a.val - b.val);

    // Initialize the heap with the head nodes of all linked lists
    for (let list of lists) {
        if (list) heap.push(list);
    }

    const dummy = new ListNode();
    let current = dummy;

    // Extract the smallest node and add it to the result list
    while (heap.length > 0) {
        const node = heap.pop();
        current.next = node;
        current = current.next;

        if (node.next) heap.push(node.next);
    }

    return dummy.next;
}

// Example usage
const list1 = new ListNode(1, new ListNode(4, new ListNode(5)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const list3 = new ListNode(2, new ListNode(6));

const lists = [list1, list2, list3];
const mergedList = mergeKLists(lists);
console.log(mergedList); // Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6



// //Method 2
// //2. Divide and Conquer Approach
// function mergeTwoLists(l1, l2) {
//     const dummy = new ListNode();
//     let current = dummy;

//     while (l1 && l2) {
//         if (l1.val < l2.val) {
//             current.next = l1;
//             l1 = l1.next;
//         } else {
//             current.next = l2;
//             l2 = l2.next;
//         }
//         current = current.next;
//     }

//     current.next = l1 || l2;
//     return dummy.next;
// }

// function mergeKLists(lists) {
//     if (lists.length === 0) return null;

//     const mergeLists = (lists, left, right) => {
//         if (left === right) return lists[left];
//         if (left > right) return null;

//         const mid = Math.floor((left + right) / 2);
//         const l1 = mergeLists(lists, left, mid);
//         const l2 = mergeLists(lists, mid + 1, right);

//         return mergeTwoLists(l1, l2);
//     };

//     return mergeLists(lists, 0, lists.length - 1);
// }

// // Example usage
// const list1 = new ListNode(1, new ListNode(4, new ListNode(5)));
// const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
// const list3 = new ListNode(2, new ListNode(6));

// const lists = [list1, list2, list3];
// const mergedList = mergeKLists(lists);
// console.log(mergedList); // Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6
