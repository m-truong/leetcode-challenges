// Q:
// is it an unsorted binary tree?
// All testcases are unsorted
// so ORDER doesn't matter
// are IDENTICAL INTEGER VALUES ALLOWED?
// (yes allowed)
// any duplicate values in a tree-node? i.e. all unique values?

// BST seems to be the (binary search tree) is the "sorted" one

// task: given a binary tree's r00t, INVERT the binary-tree (i.e. reverse)
// ...then return the same r00t

// invert-seems to switch the pointers of left-right TreeNodes
// keep track of the RootNode
// inserted left first, then right first

// plan:
// sentinel-nodes?
// will have to traverse tree until reach the leaf nodes
// then traverse until this.left && this.right are BOTH null
// once end of tree is reached
//  ... will have to backtrack-> and MIRROR the left-to-right treenodes
// CANNOT SORT FIRST, because then the original order isn't 'inverted'

// tip:
// useful to use DP or Recursion

// edge:

// constraints:
// # nodes can be between 0 to 100
// need to handle empty root node first
// the values are -100 to +100


/**
 * Definition for a binary tree node. Perfect binary tree, whereby all internal nodes have at most two-child-nodes, and all the leaves are at the same level.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// Note: tree-nodes look different from ListNodes

class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined) ? 0 : val;
        this.left = (left === undefined) ? null : left;
        this.right = (right === undefined) ? null : right;
    }
}

console.log('bloop');

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    // at most two references to 2 other Tree nodes
    // my tree nodes do not need to be sorted
    // they also can be negative
    // i can get an empty argument testcase
    // there can be identical values

    // my first dummy-sentinel node will have a value of zer0
    // but it'll have 2 pointers to a left Three Node Child
    // and a right tree-node child

    // pseudo:
    //check if my root node is an edge-case for []
    // how would I know?
    // ...well, first then check if my root has a null-value for it's left-node
    // also then i'd check if my right-node has a null-value for it's right-node


    console.log('here ===> root',   JSON.stringify(root));

    // edge: first check if NO INPUT provided
    // like if the root is undefined // this might be the []empty array edg-case
    if (root === undefined) {
        return root;
    }

    // edge: edge case for single - Tree Node
    if (root.val && !root.left && !root.right) {
        return root;
    }

    //
    // note: i call the ES6 JS class constructor here.
    const sentinel = new TreeNode();
    // write the sentinel's nodes values to point to the root
    // so that it doesn't get reference-error
    sentinel.left = root;
    return root;
};