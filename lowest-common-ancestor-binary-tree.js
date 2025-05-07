// constraints:
// at least 2 treeNodes
// all the values must be unique (no duplicates)
// node.values are also (-) negative
// argument 'p' will not be same as 'q'

// edgecases:
// if p or q is an ancester of the other; then just return that node
//

// pseudo:
// how do I traverse the tree?

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// this assumes that as long as reach 'p' or 'q' within BST, then return that node since LCA can count towards itself
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, p, q);
    }
    if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q);
    }
    return root;
};