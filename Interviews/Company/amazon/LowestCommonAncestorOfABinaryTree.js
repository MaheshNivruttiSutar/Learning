// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”

//         _______3______
//        /              \
//     ___5__          ___1__
//    /      \        /      \
//    6      _2       0       8
//          /  \
//          7   4
// For example, the lowest common ancestor (LCA) of nodes 5 and 1 is 3. Another example is LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.



class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function lowestCommonAncestor(root, p, w) {
    if (!root) return null;

    // If root matches either p or w, then root is LCA
    if (root === p || root === w) return root;

    // Search in left and right subtrees
    const left = lowestCommonAncestor(root.left, p, w);
    const right = lowestCommonAncestor(root.right, p, w);

    // If both left and right subtree calls return non-null, root is LCA
    if (left && right) return root;

    // Otherwise, return the non-null child (if any)
    return left ? left : right;
}

// Example usage
// Construct the binary tree
const node6 = new TreeNode(6);
const node7 = new TreeNode(7);
const node4 = new TreeNode(4);
const node2 = new TreeNode(2, node7, node4);
const node0 = new TreeNode(0);
const node8 = new TreeNode(8);
const node5 = new TreeNode(5, node6, node2);
const node1 = new TreeNode(1, node0, node8);
const root = new TreeNode(3, node5, node1);

// Find the LCA of nodes 5 and 1
console.log(lowestCommonAncestor(root, node5, node1).val); // Output: 3

// Find the LCA of nodes 5 and 4
console.log(lowestCommonAncestor(root, node5, node4).val); // Output: 5
