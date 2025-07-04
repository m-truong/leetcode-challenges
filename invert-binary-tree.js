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
    constructor (val, left, right) {
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

    // BST and BinaryTrees are not the same
    // BinaryTrees are more generalized
    // BST's are a specialized form of BinaryTrees that are sorted, making searh, insertion and deletion efficient
    // O((log(n))


    console.log('here ===> root',   JSON.stringify(root));
    // base case
    if (root === null) { return root; }
    // always store the left first with DFS when it's sorted already
    const leftNode = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(leftNode);
    // always remember that recursion calls never get resolved
    // ... only until ther recursive call returns itself, and then the left and right child TreeNodes get swapped (ie. reversed)
    return root;


    // Reassign the pointers of the TreeNode root
    // which should only take a few mmss in terms of runtime
    // since the TreeNode (class) is supposed to be like a HashMap
    // and if the left and right pointers are never null
    // keep reassigning the pointers

    // new-approach: use depth-first-search (DPS) or breadth-first-search (BFS)

    // Q’s & Assumptions
    // Assume non-empty root & non-empty nodes
    // Single root node returns the root node
    // It doesn’t matter whether its balanced or unbalanced
    // It’s not a BST so we don’t have to look at the value at all
    // Assume all numbers are unique (pls)

    // Algorithm
    // Start at the root node
    // Recursive step:
    // Base case is if both children are null, return
    // Look at the left and the right child node, and swap them (using a temporary variable)
    // Then recurse on each of the left and right (now swapped) nodes as the root of the following tree
};