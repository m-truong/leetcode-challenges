// pseudo:
// binary-search tree: a binary tree is defined as each node having at most 2 left and right TreeNodes
// if it's named a "search" tree, this it's already 'sorted' and satisfies property, whereby the left child node will be LESS than, and the right tree node will be GREATER than the value of the node

// task:
// find the node ina BST given the root, and return the subtree that that NODE is connected to

// edgecases-constraints:
// min 1 node [1, 5000]
// all node.vals are pos+
// root is a BST: so each node will have at most 2 children nodes, and already sorted left, right


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    let res = null;
    const helper = (node) => {
        if (!node) return;
        if (node.val === val) {
            res = node;
            return;
        }
        if (val < node.val) helper(node.left)
        if (val > node. val) helper (node.right)
    }
    helper(root);
    return res;
};