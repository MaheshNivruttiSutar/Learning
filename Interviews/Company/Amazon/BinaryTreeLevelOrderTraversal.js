// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]

// // Definition for a binary tree node.
// class TreeNode {
//     constructor(val = 0, left = null, right = null) {
//         this.val = val;
//         this.left = left;
//         this.right = right;
//     }
// }

// function levelOrder(root) {
//     const result = []; // This will hold the final level order traversal
//     if (root === null) return result; // Return empty array if root is null

//     const queue = [root]; // Initialize the queue with the root node

//     while (queue.length > 0) {
//         const levelSize = queue.length; // Number of nodes at the current level
//         const currentLevel = []; // Array to store values of the current level

//         for (let i = 0; i < levelSize; i++) {
//             const node = queue.shift(); // Remove the node from the front of the queue
//             currentLevel.push(node.val); // Add the node's value to the current level list

//             if (node.left !== null) {
//                 queue.push(node.left); // Add left child to the queue
//             }

//             if (node.right !== null) {
//                 queue.push(node.right); // Add right child to the queue
//             }
//         }

//         result.push(currentLevel); // Add the current level to the result list
//     }

//     return result; // Return the result list containing level order traversal
// }






// Definition for a binary tree node.
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}




// Create the binary tree from the example
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

// Define the levelOrder function
function levelOrder(root) {
    const result = [];
    if (root === null) return result;

    const queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            currentLevel.push(node.val);

            if (node.left !== null) {
                queue.push(node.left);
            }

            if (node.right !== null) {
                queue.push(node.right);
            }
        }

        result.push(currentLevel);
    }

    return result;
}

// Call the function and print the result
console.log(levelOrder(root)); // Output: [[3], [9, 20], [15, 7]]
