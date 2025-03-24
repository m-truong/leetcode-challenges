// task

// constraints
// max number of nodes in root-traversal is 5000 nodes
// can have undefined-root TreeNode since expected input-range is [0, 5000] TreeNodes

// edge
// can have empty tree, even though given undefined-root
// handle by creating a sentinel-dummy node
//

// psuedo
// work with sentinel-TreeNode
// return boolean flag
// a binary tree has only two subtrees
// a binary-[search] tree is one where all nodes are [SORTED], then possible for O(nLogn) algo
// a [balanced] binary tree ISN'T necessarily a binary-[search] tree
// balanced-binary tree means that the heights? or depths? of each left/right subtree ONLY DIFFERS AT MOST BY SINGLE NODE

/**
 * definition of binary tree node inputs. essentially ListNode * class constructor function.
 * function TreeNode (val, left, right) {
 *    this.val = (val === undefined ? 0 : val);
 *    this.left = (left === undefined ? 0 : left);
 *    this.right = (right === undefined ? 0 : right);
 * }
 */

const TreeNode =  (val, left, right) => {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? 0 : left);
    this.right = (right === undefined ? 0 : right);
}

/**
 * @param {TreeNode} givenRoot
 * @return {boolean}
 */
const isBalanced = (givenRoot) => {};