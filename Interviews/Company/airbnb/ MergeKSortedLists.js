// Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(node, listIndex) {
        this.heap.push({ node, listIndex });
        this.heap.sort((a, b) => a.node.val - b.node.val);
    }

    extractMin() {
        return this.heap.shift().node;
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

function mergeKLists(lists) {
    if (lists.length === 0) return null;

    const heap = new MinHeap();

    // Initialize the heap with the head nodes of each list
    for (let i = 0; i < lists.length; i++) {
        if (lists[i] !== null) {
            heap.insert(lists[i], i);
        }
    }

    // Dummy node to simplify the merged list creation
    let dummy = new ListNode(0);
    let current = dummy;

    // Extract the minimum node and add the next node from the same list to the heap
    while (!heap.isEmpty()) {
        let minNode = heap.extractMin();
        current.next = minNode;
        current = current.next;

        if (minNode.next !== null) {
            heap.insert(minNode.next, minNode.listIndex);
        }
    }

    return dummy.next;
}

// Example usage
const list1 = new ListNode(1, new ListNode(4, new ListNode(5)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const list3 = new ListNode(2, new ListNode(6));

const mergedList = mergeKLists([list1, list2, list3]);

// Function to print linked list
function printList(node) {
    while (node) {
        process.stdout.write(node.val + " ");
        node = node.next;
    }
    console.log();
}

printList(mergedList);  // Output: 1 1 2 3 4 4 5 6
