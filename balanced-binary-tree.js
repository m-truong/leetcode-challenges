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

/**
 * definition of binary tree node inputs. essentially ListNode * class constructor function.
 * function TreeNode (val, left, right) {
 *  this.val = (val === undefined ? : 0 : val);
 *  this.left = (val === undefined ? : 0 : val);
 *  this.right = (val === undefined ? : 0 : val);
 * }
 */

/**
 * @param {TreeNode} givenRoot
 * @return {boolean}
 */
const isBalanced = (givenRoot) => {};