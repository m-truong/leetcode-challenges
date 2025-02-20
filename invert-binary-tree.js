// task: given a binary tree's r00t, invert the tree
// ...return it's r00t
// invert-seems to switch the pointers of left-right TreeNodes
// keep track of the RootNode

// plan:
// sentinel-nodes?
// will have to traverse Tree until reach the leaf nodes
// then traverse until this.left && this.right are BOTH null
// once end of tree is reached
//  ... will have to backtrack-> and MIRROR the left-to-right treenodes

// useful to use DP or Recursion

// edge:

// constraints:


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// Note: tree-nodes look different from ListNodes

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    console.log('here ===> root',   JSON.stringify(root));
};