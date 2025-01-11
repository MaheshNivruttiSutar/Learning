// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
// Definition for a binary tree node.
class TreeNode {
    constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }

  // Function to convert sorted array to a height-balanced BST
  function sortedArrayToBST(nums) {
    // Helper function to recursively build the tree
    function buildTree(left, right) {
      if (left > right) {
        return null;
      }

      // Find the middle index
      const mid = Math.floor((left + right) / 2);

      // Create a new node with the middle element
      const node = new TreeNode(nums[mid]);

      // Recursively build the left and right subtrees
      node.left = buildTree(left, mid - 1);
      node.right = buildTree(mid + 1, right);

      return node;
    }

    // Start building the tree from the full range of the array
    return buildTree(0, nums.length - 1);
  }

  // Example usage:
  const sortedArray = [-10, -3, 0, 5, 9];
  const bstRoot = sortedArrayToBST(sortedArray);
  console.log(bstRoot);
