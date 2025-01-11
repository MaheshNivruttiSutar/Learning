// Given a binary tree, determine if it is a valid binary search tree (BST).

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
// Example 1:
//     2
//    / \
//   1   3
// Binary tree [2,1,3], return true.
// Example 2:
//     1
//    / \
//   2   3
// Binary tree [1,2,3], return false.


class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function isValidBST(root) {
    return isValidBSTHelper(root, -Infinity, Infinity);
}

function isValidBSTHelper(node, min, max) {
    if (node === null) {
        return true;
    }

    // The current node's value must be between min and max
    if (node.val <= min || node.val >= max) {
        return false;
    }

    // Recursively check the left and right subtrees with updated bounds
    return isValidBSTHelper(node.left, min, node.val) &&
           isValidBSTHelper(node.right, node.val, max);
}

// Example usage
const tree1 = new TreeNode(2, new TreeNode(1), new TreeNode(3));
console.log(isValidBST(tree1)); // Output: true

const tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(isValidBST(tree2)); // Output: false
